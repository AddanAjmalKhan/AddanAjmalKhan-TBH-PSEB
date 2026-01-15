import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    patientName: "",
    age: "",
    bloodGroup: "",
    disease: "",
    hbLevel: "",
    pintsRequired: "",
    timeLimit: "",
    hospital: "",
    city: "",
    attendantName: "",
    attendantContact: "",
    pickAndDrop: "",
    exchangePossibility: "",
    attendantBloodGroup: "",
    attendantResidenceCity: "",
  });

  // 🔹 Listen for header button click
  useEffect(() => {
    const openModal = () => setShowModal(true);
    window.addEventListener("open-blood-request", openModal);

    return () =>
      window.removeEventListener("open-blood-request", openModal);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bloodRequests"), {
        ...formData,
        status: "pending",
        createdAt: serverTimestamp(),
      });
      alert("Blood request submitted successfully");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to submit request");
    }
  };

  return (
    <>
      {/* 🔴 ADD THIS ID */}
      <section
        id="hero"
        className="text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 min-h-[520px] grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-snug">
              THE <br /> BLOOD <br /> HEROES
            </h1>

            <p className="mt-6 text-white/90 max-w-md">
              Every Pint Matters. Join our mission to save lives.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_iyAzbfibRQ40wpaRllLAOahTCtuT0NC2DeOEQoF3WXNNZw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold"
              >
                ❤️ Volunteer Registration
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="bg-red-900 px-6 py-3 rounded-md font-semibold"
              >
                🤍 Request Blood
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-red-600">
                Blood Request Case Form
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 grid md:grid-cols-2 gap-4"
            >
              {Object.keys(formData).map((key) => (
                <Input
                  key={key}
                  label={key.replace(/([A-Z])/g, " $1")}
                  name={key}
                  onChange={handleChange}
                />
              ))}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold"
                >
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

function Input({ label, name, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-1">{label}</label>
      <input
        name={name}
        onChange={onChange}
        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
}
