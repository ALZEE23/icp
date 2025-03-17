import React, { useState } from "react";
import { 
  Link, 
  Key, 
  Copy, 
  Trash, 
  Eye, 
  EyeOff, 
  Plus, 
  RefreshCw, 
  Shield, 
  Users 
} from "lucide-react";

const initialLinks = [
  { id: "1", name: "Marketing Assets", folder: "Marketing", url: "https://example.com/share/marketing", accessed: 24, created: "2023-10-15", expires: "2024-10-15" },
  { id: "2", name: "Design Files", folder: "Design", url: "https://example.com/share/design", accessed: 12, created: "2023-11-10", expires: "2024-11-10" },
  { id: "3", name: "Development Resources", folder: "Development", url: "https://example.com/share/dev", accessed: 56, created: "2023-09-05", expires: "2024-09-05" },
];

const initialTokens = [
  { id: "t1", name: "Client Access", token: "tk_1a2b3c4d5e6f", permissions: "Read", created: "2023-10-15", expires: "2024-10-15", active: true },
  { id: "t2", name: "Team Access", token: "tk_6f5e4d3c2b1a", permissions: "Read, Write", created: "2023-11-10", expires: "2024-11-10", active: true },
  { id: "t3", name: "Admin Access", token: "tk_abcdef123456", permissions: "Full Access", created: "2023-09-05", expires: "2024-09-05", active: false },
];

const ManagedLinks = () => {
  const [links, setLinks] = useState(initialLinks);
  const [tokens, setTokens] = useState(initialTokens);
  const [newLink, setNewLink] = useState({ name: "", folder: "" });
  const [newToken, setNewToken] = useState({ name: "", permissions: "Read" });
  const [showTokens, setShowTokens] = useState({});

  const handleCreateLink = () => {
    if (!newLink.name || !newLink.folder) {
      alert("Please provide both name and folder.");
      return;
    }

    const id = Math.random().toString(36).substring(2, 9);
    const newLinkItem = {
      id,
      name: newLink.name,
      folder: newLink.folder,
      url: `https://example.com/share/${id}`,
      accessed: 0,
      created: new Date().toISOString().split("T")[0],
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    };

    setLinks([...links, newLinkItem]);
    setNewLink({ name: "", folder: "" });
    alert("Link Created Successfully.");
  };

  const handleCreateToken = () => {
    if (!newToken.name) {
      alert("Please provide a name for the token.");
      return;
    }

    const id = `t${Math.random().toString(36).substring(2, 9)}`;
    const token = `tk_${Math.random().toString(36).substring(2, 10)}`;
    const newTokenItem = {
      id,
      name: newToken.name,
      token,
      permissions: newToken.permissions,
      created: new Date().toISOString().split("T")[0],
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      active: true,
    };

    setTokens([...tokens, newTokenItem]);
    setNewToken({ name: "", permissions: "Read" });
    setShowTokens({ ...showTokens, [id]: true });

    alert("Token Created Successfully.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Managed Links & Access</h1>
        <p className="text-gray-500">Create and manage shared links and access tokens for your folders.</p>
      </div>

      <div className="tabs">
        <input type="radio" name="tabs" id="links-tab" className="tab" defaultChecked />
        <label htmlFor="links-tab" className="tab">Shared Links</label>

        <input type="radio" name="tabs" id="tokens-tab" className="tab" />
        <label htmlFor="tokens-tab" className="tab">Access Tokens</label>

        <div className="tab-content">
          <div>
            <button className="btn btn-primary mb-4" onClick={handleCreateLink}>
              <Plus className="mr-2" /> Create New Link
            </button>

            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Folder</th>
                  <th>Created</th>
                  <th>Expires</th>
                  <th>Accessed</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link) => (
                  <tr key={link.id}>
                    <td>{link.name}</td>
                    <td>{link.folder}</td>
                    <td>{link.created}</td>
                    <td>{link.expires}</td>
                    <td>{link.accessed} times</td>
                    <td>
                      <button className="btn btn-sm btn-outline">
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="btn btn-sm btn-error ml-2">
                        <Trash className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <button className="btn btn-primary mb-4" onClick={handleCreateToken}>
              <Plus className="mr-2" /> Create New Token
            </button>

            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Token</th>
                  <th>Permissions</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token) => (
                  <tr key={token.id}>
                    <td>{token.name}</td>
                    <td>
                      {showTokens[token.id] ? token.token : "••••••••••••"}
                      <button className="btn btn-sm btn-outline ml-2" onClick={() => setShowTokens({ ...showTokens, [token.id]: !showTokens[token.id] })}>
                        {showTokens[token.id] ? <EyeOff /> : <Eye />}
                      </button>
                    </td>
                    <td>
                      <Shield className="mr-2" /> {token.permissions}
                    </td>
                    <td>{token.created}</td>
                    <td>
                      <span className={`badge ${token.active ? "badge-success" : "badge-error"}`}>{token.active ? "Active" : "Inactive"}</span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-error ml-2">
                        <Trash className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedLinks;
