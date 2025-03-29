import { Download, FolderX, Search, Trash2, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { hello_backend } from "../../../../../../declarations/hello_backend";
import FileIcon from "./FileIcon";

// const folders = [
//   { id: 1, name: ".dfx", size: "4 KB" },
//   { id: 2, name: ".github", size: "12 KB" },
//   { id: 3, name: ".mops", size: "8 KB" },
//   { id: 4, name: "deps", size: "20 KB" },
//   { id: 5, name: "node_modules", size: "150 MB" },
//   { id: 6, name: "src", size: "50 KB" },
//   { id: 7, name: "test", size: "10 KB" },
// ];

// const INIfiles = [
//   { id: 1, name: ".env", size: "1 KB" },
//   { id: 2, name: ".gitignore", size: "1 KB" },
//   { id: 3, name: "dfx.json", size: "2 KB" },
//   { id: 4, name: "mops.toml", size: "1 KB" },
//   { id: 5, name: "package.json", size: "3 KB" },
//   { id: 6, name: "package-lock.json", size: "200 KB" },
//   { id: 7, name: "README.md", size: "5 KB" },
//   { id: 8, name: "tsconfig.json", size: "2 KB" },
// ];

const FileManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileTransferProgress, setFileTransferProgress] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    file: null,
  });

  // Fetch files once on load
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

  // Reusable: Download file
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

        setFileTransferProgress((prev) => ({
          ...prev,
          progress: Math.floor(((i + 1) / totalChunks) * 100),
        }));
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
    } finally {
      setFileTransferProgress(null);
    }
  };

  // Reusable: Delete file
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

  // Modal 

  const handleModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  // Show context menu
  const showContextMenu = (e, file) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY, file });
  };

  // Long press for mobile
  let touchTimer;
  const handleTouchStart = (e, file) => {
    touchTimer = setTimeout(() => {
      setContextMenu({
        visible: true,
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        file,
      });
    }, 800); // 800ms long press
  };
  const handleTouchEnd = () => clearTimeout(touchTimer);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Hide context menu on click
  const handleClickOutside = () => setContextMenu({ visible: false });

  return (
    <div className="flex min-h-screen bg-black" onClick={handleClickOutside}>
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-4 w-full sm:w-96">
          <input
            type="text"
            placeholder="Search files and folders..."
            className="w-full rounded-lg border border-gray-700 bg-gray-900 py-2 pr-4 pl-10 text-white focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center">
              <div className="loader h-12 w-12 animate-spin rounded-full border-primary border-t-4 border-b-4" />
              <p className="mt-4 text-gray-400 text-sm">
                Loading your files...
              </p>
            </div>
          </div>
        ) : filteredFiles.length === 0 ? (
          <div className="mt-10 text-center text-white">
            <FolderX className="mx-auto mb-4 h-12 w-12" />
            <p>No files found</p>
          </div>
        ) : (
          <div className="h-[800px] overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
            <div className="h-full overflow-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="sticky top-0 z-10 bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase">
                      Size
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-800">
                  {filteredFiles.map((file) => (
                    <tr
                      key={file.name}
                      className="cursor-pointer hover:bg-gray-700"
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
                      <td className="px-6 py-4 text-gray-400 text-sm">
                        {file.size}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Context Menu */}
        {contextMenu.visible && (
          <div
            className="fixed z-50 rounded-lg bg-gray-800 p-3 shadow-lg"
            style={{ top: contextMenu.y, left: contextMenu.x }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-white hover:bg-gray-700"
              onClick={() => handleDownload(contextMenu.file)}
            >
              <Download className="h-5 w-5" /> Download
            </button>
            <button
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-white hover:bg-[#2b80ff]"
              onClick={() => handleModal(contextMenu.file)}
            >
              <Send className="h-5 w-5" /> Kirim File
            </button>
            <button
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-white hover:bg-red-600"
              onClick={() => handleDelete(contextMenu.file)}
            >
              <Trash2 className="h-5 w-5" /> Delete
            </button>
          </div>
        )}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Create New Token</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newToken = {
                  id: Date.now().toString(),
                  PublicKeyPenerima: e.target.penerima.value,
                  idFolder: e.target.folder.value,
                };
                setDataAkses([...dataAkses, newToken]);
                e.target.reset();
                document.getElementById("my_modal_1").close();
              }}
            >
              <div className="mb-4">
                <label className="mb-1 block text-gray-400 text-sm">
                  📁 Folder ID:
                </label>
                <input
                  type="text"
                  name="folder"
                  required
                  className="w-full rounded-md border border-gray-600 bg-[#1A1A1A] px-3 py-2 text-white focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-gray-400 text-sm">
                  🏷️ Penerima:
                </label>
                <input
                  type="text"
                  name="penerima"
                  required
                  className="w-full rounded-md border border-gray-600 bg-[#1A1A1A] px-3 py-2 text-white focus:outline-none"
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default FileManager;
