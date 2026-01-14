import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  LayoutDashboard,
  Users,
  Droplet,
  FileText,
  Settings,
  LogOut,
  ClipboardList,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState } from "react";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Donors", path: "/donors", icon: Droplet },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Blood Requests", path: "/blood-requests", icon: ClipboardList },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("adminAuth");
    navigate("/login");
  };

  return (
    <>
      <aside className="hidden md:flex w-64 h-screen bg-[#070B14] border-r border-white/10 flex-col">
        <div className="flex items-center gap-3 px-6 h-16 border-b border-white/10">
          <img src={logo} alt="Blood Heroes" className="w-9 h-9" />
          <span className="text-lg font-semibold">Blood Heroes</span>
        </div>

        <div className="mx-3 mt-6 mb-6 bg-[#0F1524] rounded-xl p-3 space-y-2 flex-1 overflow-y-auto">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
                ${
                  location.pathname === item.path
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              <item.icon size={18} />
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="px-4 py-6 border-t border-white/10 space-y-2">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white"
          >
            <Settings size={18} />
            Settings
          </NavLink>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex w-full items-center gap-3 px-4 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#0F1524] rounded-xl p-6 w-[90%] max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Confirm Logout</h3>
            <p className="text-sm text-gray-400 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded text-white"
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
