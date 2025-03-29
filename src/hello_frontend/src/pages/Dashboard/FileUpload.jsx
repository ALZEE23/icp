import { HttpAgent } from "@dfinity/agent";
import { FileUp, Plus, Upload, X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

import { cn } from "~/lib/utils";
import { canisterId, createActor } from "../../../../declarations/hello_backend";

const agent = new HttpAgent();
const backend = createActor(canisterId, { agent });

const FileUpload = () => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        addFiles(selectedFiles);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        addFiles(droppedFiles);
    };

    const addFiles = (newFiles) => {
        const updatedFiles = [...files];

        newFiles.forEach((file) => {
            const fileWithPreview = Object.assign(file, {
                preview: URL.createObjectURL(file),
                id: crypto.randomUUID(), // ✅ Menggunakan UUID untuk ID unik
                progress: 0,
                status: "pending",
            });
            updatedFiles.push(fileWithPreview);
        });

        setFiles(updatedFiles);
    };

    const removeFile = (id) => {
        const updatedFiles = files.filter((file) => file.id !== id);
        setFiles(updatedFiles);
    };

    const uploadFiles = async () => {
        if (files.length === 0) return;

        setUploading(true);

        const updatedFiles = [...files];

        for (const file of updatedFiles) {
            const arrayBuffer = await file.arrayBuffer();
            const content = new Uint8Array(arrayBuffer);
            const chunkSize = 1024 * 1024;
            const totalChunks = Math.ceil(content.length / chunkSize);

            try {
                for (let i = 0; i < totalChunks; i++) {
                    const start = i * chunkSize;
                    const end = Math.min(start + chunkSize, content.length);
                    const chunk = content.slice(start, end);

                    await backend.uploadFileChunk(file.name, chunk, BigInt(i), file.type);

                    file.progress = Math.floor(((i + 1) / totalChunks) * 100);
                    setFiles([...updatedFiles]);
                }

                file.status = "complete";
            } catch (error) {
                console.error("Upload failed:", error);
                file.status = "error";
                toast.error("Failed to upload files.");
            }
        }

        setUploading(false);
        toast.success("Files uploaded successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "colored",
        });
    };

    return (
        <div className="flex flex-col items-center justify-center px-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-8">
                <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold text-4xl text-transparent drop-shadow-lg">
                    Secure File Upload
                </h1>
                <p className="mb-6 text-zinc-400">
                    Drag & drop or select files to upload securely to the cloud.
                </p>

                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={cn(
                        "flex h-64 flex-col items-center justify-center rounded border border-zinc-700 bg-zinc-800 p-8 transition-colors",
                        isDragging && "border-cyan-400/50 bg-cyan-900/20 shadow-cyan-500/20",
                    )}
                >
                    <Upload className="mb-4 size-12 animate-bounce text-blue-500" />
                    <h3 className="font-medium text-lg">Drag & Drop Files Here</h3>
                    <p className="mb-4 text-sm text-zinc-400">or click to browse files</p>
                    <label className="btn border-0 bg-blue-600 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
                        <input
                            type="file"
                            multiple
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <Plus className="size-4" />
                        Select Files
                    </label>
                </div>

                {files.length > 0 && (
                    <div className="mt-6">
                        <h3 className="mb-3 font-semibold text-lg">
                            Selected Files ({files.length})
                        </h3>
                        <div className="space-y-4">
                            {files.map((file) => (
                                <div
                                    key={file.id}
                                    className="flex items-center rounded border border-zinc-700 bg-zinc-800 p-4 shadow"
                                >
                                    <div className="mr-4 flex size-12 items-center justify-center rounded bg-zinc-800">
                                        {file.type.startsWith("image/") ? (
                                            <img
                                                src={file.preview}
                                                alt={file.name}
                                                className="size-full rounded object-cover"
                                            />
                                        ) : (
                                            <FileUp className="size-5 text-cyan-400" />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <p className="truncate font-medium">{file.name}</p>
                                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-zinc-700">
                                            <div
                                                className="h-2 bg-gradient-to-r from-blue-400 to-purple-500"
                                                style={{ width: `${file.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        className="ml-8 text-red-400 hover:text-red-500"
                                        onClick={() => removeFile(file.id)}
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            className="mt-4 w-full rounded bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-purple-500/50"
                            onClick={uploadFiles}
                            disabled={uploading}
                        >
                            {uploading ? "Uploading..." : "Upload All"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
