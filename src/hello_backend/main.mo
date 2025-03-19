import Text "mo:base/Text";
import Nat "mo:base/Nat";
// import Buffer "mo:base/Buffer";
// import Trie "mo:base/Trie";
// import TrieMap "mo:base/TrieMap";
import Blob "mo:base/Blob";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
// import _Sha256 "mo:sha2/Sha256";
// import Base16 "mo:base16/Base16";

persistent actor StorageChain {

  stable var fileStorage : [(Nat, Blob)] = [];
  stable var _userStorage : [(Principal, Nat)] = [];
  stable var _userBalances : [(Principal, Nat)] = [];

  public shared func uploadFile(fileId : Nat, fileData : Blob) : async Text {
    if (Array.size(Blob.toArray(fileData)) > 1_000_000) {
        return "File too large";
    };
    fileStorage := Array.append([(fileId, fileData)], fileStorage);

    return "File uploaded";
  };

  public shared func downloadFile(fileId : Nat) : async (Nat, Blob) {
    return fileStorage.get(fileId);
  };

};
