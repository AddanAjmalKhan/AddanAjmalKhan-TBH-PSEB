import logo from "../../assets/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Droplet,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState } from "react";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Donors", path: "/donors", icon: Droplet },
  { name: "Reports", path: "/reports", icon: FileText },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // 🔥 Firebase Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("adminAuth");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <aside className="w-64 h-screen bg-[#070B14] border-r border-white/10 flex flex-col">
        {/* LOGO */}
        <div className="flex items-center gap-3 px-6 h-16 border-b border-white/10">
          <img src={logo} alt="Blood Heroes" className="w-9 h-9 object-contain" />
          <span className="text-lg font-semibold text-white">
            Blood Heroes
          </span>
        </div>

        {/* MAIN MENU */}
        <div className="mx-3 mt-6 mb-6 bg-[#0F1524] rounded-xl p-3 space-y-2 flex-1 overflow-y-auto">
          {menu.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
                  ${
                    isActive
                      ? "bg-red-600 text-white shadow"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <item.icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </div>

        {/* BOTTOM ACTIONS */}
        <div className="px-4 py-6 border-t border-white/10 space-y-2">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
              ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>

          {/* LOGOUT */}
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex w-full items-center gap-3 px-4 py-2 rounded-lg text-sm transition
            text-red-400 hover:bg-red-500/10 hover:text-red-500"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* 🔴 LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#0F1524] rounded-xl p-6 w-[90%] max-w-sm shadow-xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Confirm Logout
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Are you sure you want to log out of the admin panel?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-sm rounded-lg text-gray-300
                hover:bg-white/10 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm rounded-lg bg-red-600
                hover:bg-red-700 text-white transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
