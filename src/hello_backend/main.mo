persistent actor cihuy {
  public query func greet1(name : Text) : async Text {
    return "Hello from cihuy, " # name # "!";
  };

  public query func greet2(name : Text) : async Text {
    return "Hello from cihuy2, " # name # "!";
  };
};
