import React, { useState } from "react";
import { Upload, Plus, FileUp, Check, X } from "lucide-react";
import Layout from "../../pages/Dashboard/components/layout";
import { Actor, HttpAgent } from "@dfinity/agent";
import { canisterId, createActor } from "../../../../declarations/hello_backend";


const agent = new HttpAgent.create();
const backend = createActor(canisterId, { agent });

const uploadFiles = async () => {
  if (files.length === 0) return;

  setUploading(true);

  try {
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const blob = new Uint8Array(arrayBuffer); // Konversi ke Uint8Array

      await backend.uploadFile(file.id, blob); // Kirim ke backend
    }

    alert("Files uploaded successfully!");
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Failed to upload files.");
  }

  setUploading(false);
};


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
        id: Date.now() + Math.random().toString(36).substring(2, 10),
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

  const uploadFiles = () => {
    if (files.length === 0) return;

    setUploading(true);

    const updatedFiles = [...files];

    const simulateProgress = () => {
      let allDone = true;

      updatedFiles.forEach((file, index) => {
        if (file.status === "pending") {
          allDone = false;
          file.progress += Math.floor(Math.random() * 15) + 5;

          if (file.progress >= 100) {
            file.progress = 100;
            file.status = "complete";
          }

          updatedFiles[index] = file;
        }
      });

      setFiles([...updatedFiles]);

      if (!allDone) {
        setTimeout(simulateProgress, 300);
      } else {
        setUploading(false);
      }
    };

    simulateProgress();
  };

  return (
    <Layout>
      <div className="min-h-screen text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 animate-pulse" />

        <div className="flex flex-col items-center justify-center  min-h-screen px-4">
          <div className="glass-card shadow-xl rounded-2xl p-8 backdrop-blur-md bg-black/50 border border-[#8370ff]"> 
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text mb-4 drop-shadow-lg">
              Secure File Upload
            </h1>
            <p className="text-gray-400 mb-6">
              Drag & drop or select files to upload securely to the cloud.
            </p>

            <div
              className={`border-4 rounded-lg p-8 flex flex-col items-center justify-center h-64 transition-all ${
                isDragging
                  ? "border-cyan-400/50 bg-cyan-900/20 shadow-cyan-500/20"
                  : "border-gray-600 bg-[#0D131F]/60"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="h-16 w-16 text-cyan-400 mb-4 animate-bounce" />
              <h3 className="text-xl font-medium mb-2">
                Drag & Drop Files Here
              </h3>
              <p className="text-gray-400 mb-4">Or click to browse files</p>
              <label className="bg-gradient-to-r from-cyan-400 to-purple-400 px-6 py-3 text-white font-medium rounded-lg shadow-lg cursor-pointer hover:shadow-cyan-400/50 transition-shadow">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Plus className="h-5 w-5 inline mr-2" />
                Select Files
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Selected Files ({files.length})
                </h3>
                <div className="space-y-4">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center bg-[#0D131F]/80 rounded-lg p-4 shadow-md border border-gray-700"
                    >
                      <div className="h-12 w-12 bg-gray-800 rounded flex items-center justify-center mr-4">
                        {file.type.startsWith("image/") ? (
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="h-full w-full object-cover rounded"
                          />
                        ) : (
                          <FileUp className="h-5 w-5 text-cyan-400" />
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="font-medium truncate">{file.name}</p>
                        <div className="w-full mt-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500"
                            style={{ width: `${file.progress}%` }}
                          />
                        </div>
                      </div>

                      <button
                        className="ml-4 text-red-400 hover:text-red-500"
                        onClick={() => removeFile(file.id)}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-4 w-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-white rounded-lg font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow"
                  onClick={uploadFiles}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Upload All"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FileUpload;
