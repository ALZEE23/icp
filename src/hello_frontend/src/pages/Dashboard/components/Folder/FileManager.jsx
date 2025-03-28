import React, { useState, useEffect } from "react";
import { Search, FolderX, Trash2, Download } from "lucide-react";
import Layout from "../layout";
import FileIcon from "./FileIcon";
import { hello_backend } from "../../../../../../declarations/hello_backend";

const FileManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, file: null });

  // Fetch files once on load
  useEffect(() => {
    const fetchUserFiles = async () => {
      setLoading(true);
      try {
        const userFiles = await hello_backend.getUserFiles();
        setFiles(userFiles.map(([id, data]) => ({
          id,
          name: `File_${id}`,
          size: `${(data.length / 1024).toFixed(2)} KB`,
          data,
        })));
      } catch (error) {
        console.error("Gagal mengambil file:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserFiles();
  }, []);

  // Reusable: Download file
  const handleDownload = (file) => {
    const blob = new Blob([new Uint8Array(file.data)], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
    link.remove();
    setContextMenu({ visible: false });
  };

  // Reusable: Delete file
  const handleDelete = async (file) => {
    try {
      await hello_backend.deleteFile(file.id);
      setFiles(files.filter((f) => f.id !== file.id));
    } catch (error) {
      console.error("Gagal menghapus file:", error);
    } finally {
      setContextMenu({ visible: false });
    }
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
    <div className="min-h-screen bg-black flex" onClick={handleClickOutside}>
      <Layout>
        <div className="container mx-auto px-4 py-6">
          {/* Search Bar */}
          <div className="relative mb-4 w-full sm:w-96">
            <input
              type="text"
              placeholder="Search files and folders..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary bg-gray-900 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="flex flex-col items-center">
                <div className="loader border-t-4 border-b-4 border-primary rounded-full w-12 h-12 animate-spin"></div>
                <p className="mt-4 text-gray-400 text-sm">Loading your files...</p>
              </div>
            </div>
          ) : filteredFiles.length === 0 ? (
            <div className="text-center text-white mt-10">
              <FolderX className="mx-auto h-12 w-12 mb-4" />
              <p>No files found</p>
            </div>
          ) : (
            <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900 h-[800px]">
              <div className="overflow-auto h-full">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-900 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Size</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {filteredFiles.map((file) => (
                      <tr
                        key={file.id}
                        className="hover:bg-gray-700 cursor-pointer"
                        onContextMenu={(e) => showContextMenu(e, file)}
                        onTouchStart={(e) => handleTouchStart(e, file)}
                        onTouchEnd={handleTouchEnd}
                      >
                        <td className="px-6 py-4 flex items-center whitespace-nowrap">
                          <FileIcon fileType={file.name.split(".").pop().toLowerCase()} className="w-5 h-5 mr-2" />
                          <span className="text-sm font-medium text-white">{file.name}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{file.size}</td>
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
              className="fixed bg-gray-800 shadow-lg p-3 rounded-lg z-50"
              style={{ top: contextMenu.y, left: contextMenu.x }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-700 text-white rounded-lg"
                onClick={() => handleDownload(contextMenu.file)}
              >
                <Download className="w-5 h-5" /> Download
              </button>
              <button
                className="flex items-center gap-2 px-3 py-2 w-full hover:bg-red-600 text-white rounded-lg"
                onClick={() => handleDelete(contextMenu.file)}
              >
                <Trash2 className="w-5 h-5" /> Delete
              </button>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default FileManager;
    