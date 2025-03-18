import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Buffer "mo:base/Buffer";
// import Trie "mo:base/Trie";
// import TrieMap "mo:base/TrieMap";
import Blob "mo:base/Blob";
import Principal "mo:base/Principal";
// import Array "mo:base/Array";
// import _Sha256 "mo:sha2/Sha256";
// import Base16 "mo:base16/Base16";

persistent actor StorageChain {
  // stable var dataStore : [(Nat, Text)] = [];
  // public func saveData(id : Nat, value : Text) : async Text {
  //   let buf = Buffer.fromArray<(Nat, Text)>(dataStore);
  //   buf.add((id, value));
  //   dataStore := Buffer.toArray(buf);
  //   let _response : (Text) = "Data saved";
  //   return "data saved";
  // };

  stable var fileStorage : [(Nat, Blob)] = [];
  // stable var fileTimeStamps : [(Text, Int)] = [];
  stable var userStorage : [(Principal, Nat)] = [];
  stable var userBalances : [(Principal, Nat)] = [];

  public shared func uploadFile(fileId : Nat, fileData : Blob) : async Text {
    // how to get the id and save all of data user
    // let caller = Principal.fromActor(StorageChain);
    // let fileSize = Array.size(Blob.toArray(fileData));
    // let balance = userBalances.get(caller);
    // let upload = { fileStorage = [(fileId, fileData)] };
    let upload = Buffer.fromArray<(Nat, Blob)>(fileStorage);
    upload.add((fileId, fileData));
    fileStorage := Buffer.toArray(upload);
    // how to send the data and update the canister maybe with buffer  
    return "File uploaded";
  };

  public shared func downloadFile(fileId : Nat) : async (Nat, Blob) {
    return fileStorage.get(fileId);
  };

};
