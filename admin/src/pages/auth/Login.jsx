import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("adminAuth", "true");
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid email or password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 items-center justify-center px-14
        bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#020617] text-white">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Blood Heroes
            <br />
            <span className="text-blue-400">Admin Portal</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-md">
            Control and monitor donors, blood requests, and operational workflows
            through a secure administrative system.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <img
              src={logo}
              alt="Blood Heroes Logo"
              className="w-14 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              Admin Login
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Authorized personnel only
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@bloodheroes.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg
              font-semibold tracking-wide hover:bg-blue-700 transition
              disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-8">
            © {new Date().getFullYear()} Blood Heroes. Admin Access Only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
