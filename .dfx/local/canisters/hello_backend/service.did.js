export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'saveData' : IDL.Func([IDL.Nat, IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
