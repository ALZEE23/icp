import React, { useState, useEffect } from "react";
import { Search, Folder as FolderIcon, FolderX } from "lucide-react";
import Layout from "../layout";
import FileIcon from "./FileIcon";
import { hello_backend } from "../../../../../../declarations/hello_backend";


// const folders = [
//   { id: 1, name: ".dfx", size: "4 KB" },
//   { id: 2, name: ".github", size: "12 KB" },
//   { id: 3, name: ".mops", size: "8 KB" },
//   { id: 4, name: "deps", size: "20 KB" },
//   { id: 5, name: "node_modules", size: "150 MB" },
//   { id: 6, name: "src", size: "50 KB" },
//   { id: 7, name: "test", size: "10 KB" },
// ];

// const files = [
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
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchUserFiles = async () => {
        setLoading(true);
        try {
            const userFiles = await hello_backend.getUserFiles();

            const formattedFiles = userFiles.map(([id, fileData]) => ({
                id,
                name: `File_${id}`,
                size: `${(fileData.length / 1024).toFixed(2)} KB`,
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

  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FileList component inline
const FileList = ({ folders, files }) => (
    <div className="border border-gray-700 rounded-lg overflow-hidden max-h-[830px]">
    <div className="overflow-auto max-h-[830px]">
        <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900 sticky top-0 z-10">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                        Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell"
                    >
                        Type
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell"
                    >
                        Size
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
                {folders.map((folder) => (
                    <tr key={`folder-${folder.id}`} className="hover:bg-gray-700 cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap flex items-center">
                            <FolderIcon className="w-5 h-5 mr-3" />
                            <span className="text-sm font-medium text-white">
                                {folder.name}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 hidden md:table-cell">
                            Folder
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 hidden md:table-cell">
                            {folder.size}
                        </td>
                    </tr>
                ))}

                {files.map((file) => (
                    <tr key={`file-${file.id}`} className="hover:bg-gray-700 cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap flex items-center">
                            <FileIcon
                                fileType={file.name.split(".").pop().toLowerCase()}
                                className="w-5 h-5"
                            />
                            <span className="text-sm font-medium text-white">
                                {file.name}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 hidden md:table-cell">
                            {file.name.split(".").pop().toUpperCase()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 hidden md:table-cell">
                            {file.size}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

);

  // EmptyState component inline
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center text-white">
      <div className="bg-gray-800 p-6 rounded-full mb-4">
        <FolderX
          className="h-12 w-12"
        />
        
      </div>
      <h3 className="text-lg font-medium text-white mb-1">No files found</h3>
      <p className="text-gray-400 max-w-sm">
        We couldn't find any files or folders matching your search. Try a
        different search term.
      </p>
      <button
        className="mt-4 btn btn-primary btn-sm"
        onClick={() => setSearchQuery("")}
      >
        Clear Search
      </button>
    </div>
  );

return (
    <div className="min-h-screen bg-black flex">
            <Layout>
                    <div className="container mx-auto px-4 py-6 ">
                            <div className="search-bar w-full sm:w-96 relative mb-4">
                                    <input
                                            type="text"
                                            placeholder="Search files and folders..."
                                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-900 text-white"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                            {loading ? (
                                    <div className="flex justify-center items-center py-12">
                                            <div className="flex flex-col items-center">
                                                    <div className="loader border-t-4 border-b-4 border-primary rounded-full w-12 h-12 animate-spin"></div>
                                                    <p className="mt-4 text-gray-400 text-sm">Loading your files...</p>
                                            </div>
                                    </div>
                            ) : filteredFolders.length === 0 && filteredFiles.length === 0 ? (
                                    <EmptyState />
                            ) : (
                                    <FileList folders={filteredFolders} files={filteredFiles} />
                            )}
                    </div>
            </Layout>
    </div>
);

};

export default FileManager;
