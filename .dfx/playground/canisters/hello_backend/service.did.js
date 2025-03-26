export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'uploadFile' : IDL.Func([IDL.Nat, IDL.Vec(IDL.Nat8)], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
