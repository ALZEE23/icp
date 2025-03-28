import { Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import Layout from "../../pages/Dashboard/components/layout";

const InitialDataAkses = [
  {
    id: "1",
    PublicKeyPenerima: "0x1a2b3c4d5e6f",
    PublicKeyPengirim: "0x6f5e4d3c2b1a",
    idFolder: "0x1a2b3c4d5e6f",
  },
  {
    id: "2",
    PublicKeyPenerima: "0x6f5e4d3c2b1a",
    PublicKeyPengirim: "0x1a2b3c4d5e6f",
    idFolder: "0x6f5e4d3c2b1a",
  },
  {
    id: "3",
    PublicKeyPenerima: "0x1a2b3c4d5e6f",
    PublicKeyPengirim: "0x6f5e4d3c2b1a",
    idFolder: "0x1a2b3c4d5e6f",
  },
];

const ManagedLinks = () => {
  const [dataAkses, setDataAkses] = useState(InitialDataAkses);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setDataAkses(dataAkses.filter((item) => item.id !== id));
  };

const handleAddData = async (newData) => {
    try {
        const response = await fetch('/api/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        if (response.ok) {
            const result = await response.json();
            setDataAkses([...dataAkses, result]);
        } else {
            console.error('Failed to add data:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding data:', error);
    }
};

return (
    <Layout>
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">Managed Links</h1>
                <button
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-md hover:opacity-80"
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                >
                    <Plus className="mr-2" /> Create New Token
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dataAkses.map((token) => (
                    <form
                        key={token.id}
                        className="bg-[#0A0A0A] p-6 rounded-lg shadow-lg relative overflow-hidden border border-[#111]"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20"></div>
                        <h2 className="text-xl font-semibold text-white mb-2">
                            📁 {token.idFolder}
                        </h2>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400 mb-1">
                                🔑 Pengirim:
                            </label>
                            <input
                                type="text"
                                value={token.PublicKeyPengirim}
                                readOnly
                                className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md border border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400 mb-1">
                                🏷️ Penerima:
                            </label>
                            <input
                                type="text"
                                value={token.PublicKeyPenerima}
                                readOnly
                                className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md border border-gray-600 focus:outline-none"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => handleDelete(token.id)}
                            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:opacity-80"
                        >
                            <Trash className="mr-2" /> Delete
                        </button>
                    </form>
                ))}
            </div>
        </div>

        {/* Modal */}
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
                        document.getElementById('my_modal_1').close();
                    }}
                >
                    <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">
                            📁 Folder ID:
                        </label>
                        <input
                            type="text"
                            name="folder"
                            required
                            className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md border border-gray-600 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">
                            🔑 Pengirim:
                        </label>
                        <input
                            type="text"
                            name="pengirim"
                            required
                            className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md border border-gray-600 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">
                            🏷️ Penerima:
                        </label>
                        <input
                            type="text"
                            name="penerima"
                            required
                            className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md border border-gray-600 focus:outline-none"
                        />
                    </div>
                    <div className="modal-action">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => document.getElementById('my_modal_1').close()}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    </Layout>
);
};

export default ManagedLinks;
