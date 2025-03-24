import Text "mo:base/Text";
import Nat "mo:base/Nat";
// import Buffer "mo:base/Buffer";
// import Trie "mo:base/Trie";
// import TrieMap "mo:base/TrieMap";
import Blob "mo:base/Blob";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Option "mo:base/Option";
// import Iter "mo:base/Iter";
// import _Sha256 "mo:sha2/Sha256";
// import Base16 "mo:base16/Base16";

persistent actor StorageChain {

  stable var fileStorage : [(Principal, [(Nat, Blob)])] = [];
  stable var _userStorage : [(Principal, Nat)] = [];
  stable var _userBalances : [(Principal, Nat)] = [];

  public shared (msg) func uploadFile(fileId : Nat, fileData : Blob) : async Text {
    let caller = msg.caller;
    if (Array.size(Blob.toArray(fileData)) > 1_000_000) {
      return "File too large";
    };

    //    let userFiles : ?(Principal, [(Nat, Blob)]) = Array.find<(Principal, [(Nat, Blob)])>(
    //   fileStorage,
    //   func (entry : (Principal, [(Nat, Blob)])) : Bool {
    //     entry.0 == caller
    //   }
    // );

    let existingFiles = Option.get(
      Array.find(
        fileStorage,
        func(entry : (Principal, [(Nat, Blob)])) : Bool {
          entry.0 == caller;
        },
      ),
      (caller, []) // Jika tidak ditemukan, gunakan daftar kosong
    );

    // let updatedFiles = switch (userFiles) {
    //   case (?(_, files)) { Array.append([(fileId, fileData)], files) };
    //   case (null) { [(fileId, fileData)] };
    // };

    // fileStorage := Array.filter(fileStorage, func((p, _) : (Principal, [(Nat, Blob)])) : Bool { p != caller });

    // fileStorage := Array.append([(caller, updatedFiles)], fileStorage);

    let updatedFiles = Array.append([(fileId, fileData)], existingFiles.1);

    fileStorage := Array.filter(
        fileStorage,
        func(entry : (Principal, [(Nat, Blob)])) : Bool {
            not Principal.equal(entry.0, caller)
        }
    );

    fileStorage := Array.append([(caller, updatedFiles)], fileStorage);

    return "File uploaded";
  };

  // public shared func downloadFile(fileId : Nat) : async (Nat, Blob) {
  //   return fileStorage.get(fileId);
  // };

};
