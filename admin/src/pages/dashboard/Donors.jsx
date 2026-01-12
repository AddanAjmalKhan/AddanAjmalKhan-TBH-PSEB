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

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingDonor, setEditingDonor] = useState(null);

  const [form, setForm] = useState({
    name: "",
    bloodGroup: "",
    location: "",
    status: "Active",
  });

  /* -------- FETCH DONORS -------- */
  const fetchDonors = async () => {
    const snapshot = await getDocs(collection(db, "donors"));
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDonors(list);
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  /* -------- ADD / UPDATE -------- */
  const handleSubmit = async () => {
    if (editingDonor) {
      await updateDoc(doc(db, "donors", editingDonor.id), form);
    } else {
      await addDoc(collection(db, "donors"), form);
    }

    setShowModal(false);
    setEditingDonor(null);
    setForm({
      name: "",
      bloodGroup: "",
      location: "",
      status: "Active",
    });
    fetchDonors();
  };

  /* -------- DELETE -------- */
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "donors", id));
    fetchDonors();
  };

  /* -------- EDIT -------- */
  const handleEdit = (donor) => {
    setEditingDonor(donor);
    setForm(donor);
    setShowModal(true);
  };

  return (
    <div className="bg-white text-black rounded-xl p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Donors List</h1>
          <p className="text-sm text-gray-500">
            Manage registered blood donors.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Add New Donor
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full text-sm table-fixed">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="py-3 w-1/4 text-left">Name</th>
            <th className="w-1/4 text-left">Blood Group</th>
            <th className="w-1/4 text-left">Location</th>
            <th className="w-1/4 text-center">Status</th>
            <th className="w-1/4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {donors.map((d) => (
            <tr key={d.id} className="border-b">
              <td className="py-4">{d.name}</td>
              <td>{d.bloodGroup}</td>
              <td>{d.location}</td>
              <td className="text-center">{d.status}</td>
              <td className="text-center flex justify-center gap-3">
                <button onClick={() => handleEdit(d)}>✏️</button>
                <button
                  onClick={() => handleDelete(d.id)}
                  className="text-red-500"
                >
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
              {editingDonor ? "Edit Donor" : "Add Donor"}
            </h2>

            <input
              placeholder="Name"
              className="border w-full p-2 mb-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Blood Group (A+, O-, etc)"
              className="border w-full p-2 mb-2 rounded"
              value={form.bloodGroup}
              onChange={(e) =>
                setForm({ ...form, bloodGroup: e.target.value })
              }
            />

            <input
              placeholder="Location"
              className="border w-full p-2 mb-2 rounded"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            />

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

export default Donors;
