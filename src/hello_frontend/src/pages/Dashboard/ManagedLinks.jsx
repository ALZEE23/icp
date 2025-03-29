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

    return (
        <>
            <h1 className="mb-6 font-bold text-3xl text-white">Managed Links</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {dataAkses.map((token) => (
                    <form
                        key={token.id}
                        className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <h2 className="mb-2 font-semibold text-white text-xl">
                            📁 {token.idFolder}
                        </h2>
                        <div className="mb-4">
                            <label className="mb-1 block text-sm text-zinc-400">🔑 Pengirim:</label>
                            <input
                                type="text"
                                value={token.PublicKeyPengirim}
                                readOnly
                                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block text-sm text-zinc-400">🏷️ Penerima:</label>
                            <input
                                type="text"
                                value={token.PublicKeyPenerima}
                                readOnly
                                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white focus:outline-none"
                            />
                        </div>
                    </form>
                ))}
            </div>
        </>
    );
};

export default ManagedLinks;
