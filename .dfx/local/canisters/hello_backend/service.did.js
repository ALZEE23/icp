export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'downloadFile' : IDL.Func(
        [IDL.Nat],
        [IDL.Opt(IDL.Tuple(IDL.Text, IDL.Vec(IDL.Nat8)))],
        [],
      ),
    'getUserFiles' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Text, IDL.Vec(IDL.Nat8)))],
        [],
      ),
    'uploadFile' : IDL.Func(
        [IDL.Nat, IDL.Text, IDL.Vec(IDL.Nat8)],
        [IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
