

persistent actor cihuy {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};

persistent actor cihuy2 {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};

