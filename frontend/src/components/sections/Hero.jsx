import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    date: "", patientName: "", age: "", bloodGroup: "", disease: "", hbLevel: "",
    pintsRequired: "", timeLimit: "", hospital: "", city: "", attendantName: "",
    attendantContact: "", pickAndDrop: "", exchangePossibility: "",
    attendantBloodGroup: "", attendantResidenceCity: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bloodRequests"), { ...formData, status: "pending", createdAt: serverTimestamp() });
      alert("Blood request submitted successfully");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to submit request");
    }
  };

  return (
    <>
      <section
        className="text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 min-h-[400px] md:min-h-[520px] grid grid-cols-1 md:grid-cols-2 items-center py-12 md:py-0">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight md:leading-snug">
              THE <br /> BLOOD <br /> HEROES
            </h1>
            <p className="mt-4 md:mt-6 text-white/90 max-w-md text-sm md:text-base">
              Every Pint Matters. Join our mission to save lives through voluntary blood donation.
            </p>
            <div className="mt-4 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_iyAzbfibRQ40wpaRllLAOahTCtuT0NC2DeOEQoF3WXNNZw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 font-semibold px-4 md:px-6 py-2 md:py-3 rounded-md flex items-center gap-1 md:gap-2 hover:bg-gray-100 transition text-sm md:text-base"
              >
                ❤️ Volunteer Registration Form
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="bg-red-900 px-4 md:px-6 py-2 md:py-3 rounded-md flex items-center gap-1 md:gap-2 hover:bg-red-800 transition text-sm md:text-base"
              >
                🤍 Request Blood
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-gray-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-red-200 shadow-2xl">
            <div className="flex justify-between items-center px-6 py-4 border-b border-red-100">
              <h2 className="text-xl font-bold text-red-600">Blood Request Case Form</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-red-600 text-xl transition">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
              {Object.keys(formData).map((key) => (
                <Input key={key} label={key.replace(/([A-Z])/g, " $1")} name={key} onChange={handleChange} />
              ))}
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="w-full bg-red-600 text-white py-2 md:py-3 rounded-xl font-semibold shadow-md hover:bg-red-700 transition text-sm md:text-base">
                  Submit Blood Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function Input({ label, name, type = "text", placeholder = "", onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 text-xs md:text-sm font-semibold mb-1">{label}</label>
      <input name={name} type={type} placeholder={placeholder} onChange={onChange} className="border border-gray-300 rounded-lg px-2 md:px-3 py-1 md:py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs md:text-sm" />
    </div>
  );
}
