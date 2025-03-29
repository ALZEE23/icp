import { Download, FolderX, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import { hello_backend } from "../../../../../../declarations/hello_backend";
import FileIcon from "./FileIcon";

const FileManager = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [contextMenu, setContextMenu] = useState({
        visible: false,
        x: 0,
        y: 0,
        file: null,
    });

    useEffect(() => {
        const fetchUserFiles = async () => {
            setLoading(true);
            try {
                const userFiles = await hello_backend.getFiles();
                console.log("Fetched Files:", userFiles);

                if (!Array.isArray(userFiles)) {
                    throw new Error("Invalid data format received");
                }

                const formattedFiles = userFiles.map(({ name, size, fileType }) => ({
                    name,
                    size: `${(Number(size) / 1024).toFixed(2)} KB`,
                    fileType,
                }));

                setFiles(formattedFiles);
            } catch (error) {
                console.error("Gagal mengambil file:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserFiles();
    }, []);

    const handleDownload = async (file) => {
        try {
            const totalChunks = Number(await hello_backend.getTotalChunks(file));
            const fileType = await hello_backend.getFileType(file)[0];
            const chunks = [];

            for (let i = 0; i < totalChunks; i++) {
                const chunkBlob = await hello_backend.getFileChunk(file, BigInt(i));
                if (chunkBlob) {
                    chunks.push(chunkBlob[0]);
                } else {
                    throw new Error(`Failed to retrieve chunk ${i}`);
                }
            }

            const data = new Blob(chunks, { type: fileType });
            const url = URL.createObjectURL(data);
            const link = document.createElement("a");
            link.href = url;
            link.download = file;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
            setErrorMessage(`Failed to download ${file}: ${error.message}`);
        }
    };

    const handleDelete = async (file) => {
        try {
            await hello_backend.deleteFile(file);
        } catch (error) {
            console.error("Gagal menghapus file:", error);
        } finally {
            setContextMenu({ visible: false });
            setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file));
        }
    };

    const showContextMenu = (e, file) => {
        e.preventDefault();
        setContextMenu({ visible: true, x: e.clientX, y: e.clientY, file });
    };

    let touchTimer;
    const handleTouchStart = (e, file) => {
        touchTimer = setTimeout(() => {
            setContextMenu({
                visible: true,
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                file,
            });
        }, 800);
    };
    const handleTouchEnd = () => clearTimeout(touchTimer);

    const filteredFiles = files.filter((file) =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const handleClickOutside = () => setContextMenu({ visible: false });

    return (
        <div onClick={handleClickOutside}>
            <div className="relative mb-4 w-full sm:w-96">
                <input
                    type="text"
                    placeholder="Search files and folders..."
                    className="w-full rounded border border-zinc-700 bg-zinc-800 py-2 pr-4 pl-10 text-white focus:ring-2 focus:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute top-2.5 left-3 size-5 text-zinc-400" />
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-12">
                    <div className="flex flex-col items-center">
                        <div className="size-12 animate-spin rounded-full border-primary border-y-4" />
                        <p className="mt-4 text-sm text-zinc-400">Loading your files...</p>
                    </div>
                </div>
            ) : filteredFiles.length === 0 ? (
                <div className="mx-auto mt-10 text-center text-white">
                    <FolderX className="mx-auto mb-4 h-12 w-12" />
                    <p>No files found</p>
                </div>
            ) : (
                <div className="h-[800px] overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900">
                    <div className="h-full overflow-auto">
                        <table className="min-w-full divide-y divide-zinc-700">
                            <thead className="sticky top-0 z-10 bg-zinc-900">
                                <tr>
                                    <th className="px-6 py-3 text-left font-medium text-xs text-zinc-300 uppercase">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left font-medium text-xs text-zinc-300 uppercase">
                                        Size
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-700 bg-zinc-800">
                                {filteredFiles.map((file) => (
                                    <tr
                                        key={file.name}
                                        className="cursor-pointer hover:bg-zinc-700"
                                        onContextMenu={(e) => showContextMenu(e, file.name)}
                                        onTouchStart={(e) => handleTouchStart(e, file.name)}
                                        onTouchEnd={handleTouchEnd}
                                    >
                                        <td className="flex items-center whitespace-nowrap px-6 py-4">
                                            <FileIcon
                                                fileType={file.name.split(".").pop().toLowerCase()}
                                                className="mr-2 h-5 w-5"
                                            />
                                            <span className="font-medium text-sm text-white">
                                                {file.name}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-zinc-400">
                                            {file.size}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {contextMenu.visible && (
                <div
                    className="fixed z-50 rounded-lg bg-zinc-800 p-3 shadow-lg"
                    style={{ top: contextMenu.y, left: contextMenu.x }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-white hover:bg-zinc-700"
                        onClick={() => handleDownload(contextMenu.file)}
                    >
                        <Download className="h-5 w-5" /> Download
                    </button>
                    <button
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-white hover:bg-red-600"
                        onClick={() => handleDelete(contextMenu.file)}
                    >
                        <Trash2 className="h-5 w-5" /> Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileManager;
