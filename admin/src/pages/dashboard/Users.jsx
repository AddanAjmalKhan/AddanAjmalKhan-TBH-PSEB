import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Donor",
    location: "",
    status: "Active",
    joined: "",
  });

  /* ---------------- FETCH USERS ---------------- */
  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(list);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ---------------- ADD / UPDATE ---------------- */
  const handleSubmit = async () => {
    if (editingUser) {
      await updateDoc(doc(db, "users", editingUser.id), form);
    } else {
      await addDoc(collection(db, "users"), form);
    }

    setShowModal(false);
    setEditingUser(null);
    setForm({
      name: "",
      email: "",
      role: "Donor",
      location: "",
      status: "Active",
      joined: "",
    });
    fetchUsers();
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchUsers();
  };

  /* ---------------- EDIT ---------------- */
  const handleEdit = (user) => {
    setEditingUser(user);
    setForm(user);
    setShowModal(true);
  };

  return (
    <div className="bg-white text-black rounded-xl p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Users List</h1>
          <p className="text-sm text-gray-500">Manage registered users.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Add New User
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full text-sm table-fixed">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="py-3 w-1/4 text-left">User</th>
            <th className="w-1/6 text-center">Role</th>
            <th className="w-1/6 text-left">Location</th>
            <th className="w-1/6 text-center">Status</th>
            <th className="w-1/6 text-left">Joined</th>
            <th className="w-1/6 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b">
              <td className="py-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-red-100 text-red-500 rounded-full flex items-center justify-center font-semibold">
                  {u.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{u.name}</div>
                  <div className="text-xs text-gray-500">{u.email}</div>
                </div>
              </td>

              <td className="text-center">{u.role}</td>
              <td>{u.location}</td>
              <td className="text-center">{u.status}</td>
              <td>{u.joined}</td>

              <td className="text-center flex justify-center gap-3">
                <button onClick={() => handleEdit(u)}>✏️</button>
                <button onClick={() => handleDelete(u.id)} className="text-red-500">
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="font-semibold mb-4">
              {editingUser ? "Edit User" : "Add User"}
            </h2>

            {["name", "email", "location", "joined"].map((field) => (
              <input
                key={field}
                placeholder={field}
                className="border w-full p-2 mb-2 rounded"
                value={form[field]}
                onChange={(e) =>
                  setForm({ ...form, [field]: e.target.value })
                }
              />
            ))}

            <select
              className="border w-full p-2 mb-2 rounded"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option>Donor</option>
              <option>Non Donor</option>
            </select>

            <select
              className="border w-full p-2 mb-4 rounded"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button
                onClick={handleSubmit}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
