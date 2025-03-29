import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { hello_backend } from "../../../../declarations/hello_backend";

// const InitialDataAkses = [
//     {
//         id: "1",
//         PublicKeyPenerima: "0x1a2b3c4d5e6f",
//         PublicKeyPengirim: "0x6f5e4d3c2b1a",
//         idFolder: "0x1a2b3c4d5e6f",
//     },
//     {
//         id: "2",
//         PublicKeyPenerima: "0x6f5e4d3c2b1a",
//         PublicKeyPengirim: "0x1a2b3c4d5e6f",
//         idFolder: "0x6f5e4d3c2b1a",
//     },
//     {
//         id: "3",
//         PublicKeyPenerima: "0x1a2b3c4d5e6f",
//         PublicKeyPengirim: "0x6f5e4d3c2b1a",
//         idFolder: "0x1a2b3c4d5e6f",
//     },
// ];

const ManagedLinks = () => {
    const [dataAkses, setDataAkses] = useState(InitialDataAkses);
    const [showModal, setShowModal] = useState(false);

    const transferFile = async (receiverIdText, fileName) => {
      try {
        const result = await hello_backend.transferFile(
          receiverIdText,
          fileName
        );
        return result;
      } catch (error) {
        console.error("Transfer file failed:", error);
        return false;
      }
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="font-bold text-3xl text-white">Managed Links</h1>
                    <button
                        className="flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white shadow-md hover:opacity-80"
                        onClick={() => document.getElementById("my_modal_1").showModal()}
                    >
                        <Plus className="mr-2" /> Create New Token
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {dataAkses.map((token) => (
                        <form
                            key={token.id}
                            className="relative overflow-hidden rounded-lg border border-[#111] bg-[#0A0A0A] p-6 shadow-lg"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl"></div>
                            <h2 className="mb-2 font-semibold text-white text-xl">
                                📁 {token.idFolder}
                            </h2>
                            <div className="mb-4">
                                <label className="mb-1 block text-gray-400 text-sm">
                                    🔑 Pengirim:
                                </label>
                                <input
                                    type="text"
                                    value={token.PublicKeyPengirim}
                                    readOnly
                                    className="w-full rounded-md border border-gray-600 bg-[#1A1A1A] px-3 py-2 text-white focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="mb-1 block text-gray-400 text-sm">
                                    🏷️ Penerima:
                                </label>
                                <input
                                    type="text"
                                    value={token.PublicKeyPenerima}
                                    readOnly
                                    className="w-full rounded-md border border-gray-600 bg-[#1A1A1A] px-3 py-2 text-white focus:outline-none"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleDelete(token.id)}
                                className="flex items-center rounded-md bg-red-500 px-4 py-2 text-white shadow-md hover:opacity-80"
                            >
                                <Trash className="mr-2" /> Delete
                            </button>
                        </form>
                    ))}
                </div>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Create New Token</h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const newToken = {
                                id: Date.now().toString(),
                                PublicKeyPenerima: e.target.penerima.value,
                                PublicKeyPengirim: e.target.pengirim.value,
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
                            <label className="mb-1 block text-gray-400 text-sm">🔑 Pengirim:</label>
                            <input
                                type="text"
                                name="pengirim"
                                required
                                className="w-full rounded-md border border-gray-600 bg-[#1A1A1A] px-3 py-2 text-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block text-gray-400 text-sm">🏷️ Penerima:</label>
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
        </>
    );
};

export default ManagedLinks;
