import Text "mo:base/Text";
// import Nat "mo:base/Nat";
// import Buffer "mo:base/Buffer";
// import Sha256 "mo:sha2/Sha256";
// import Base16 "mo:base16/Base16";


persistent actor cihuy {
//   stable var dataStore : [(Nat, Text)] = [];
//   public func saveData(id : Nat, value : Text) : async Text {
//     let buf = Buffer.fromArray<(Nat, Text)>(dataStore);
//     buf.add((id, value));
//     dataStore := Buffer.toArray(buf);
//     let _response : (Text) = "Data saved";
//     return "data saved";
//   };
// };

  public query func greet2(name : Text) : async Text {
    return "Hello from cihuy2, " # name # "!";
  };
};
