import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/firebase.js";

const BloodRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const q = query(
          collection(db, "bloodRequests"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRequests(data);
      } catch (error) {
        console.error("Error fetching blood requests:", error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-6">

      {/* CARD WRAPPER with same styling as Users List */}
      <div className="bg-white text-black rounded-xl p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold">Blood Requests</h1>
            <p className="text-sm text-gray-500">Manage registered blood requests.</p>
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full text-sm table-fixed">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-3 text-left w-1/6">Patient</th>
              <th className="py-3 text-left w-1/6">Blood Group</th>
              <th className="py-3 text-left w-1/6">City</th>
              <th className="py-3 text-left w-1/6">Pints</th>
              <th className="py-3 text-left w-1/6">Contact</th>
              <th className="py-3 text-center w-1/6">Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b">
                <td className="py-4">{req.patientName}</td>
                <td className="py-4 text-center">{req.bloodGroup}</td>
                <td className="py-4">{req.city}</td>
                <td className="py-4 text-center">{req.pintsRequired}</td>
                <td className="py-4">{req.attendantContact}</td>
                <td className="py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        req.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : req.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}

            {requests.length === 0 && (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-400 italic">
                  No blood requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodRequests;