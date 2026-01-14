import { Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 bg-[#0B0F1A] border-b border-white/10">
      <div className="flex items-center justify-end h-16 gap-4 px-4 sm:px-6">
        <button className="relative text-gray-400 hover:text-white">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">User ABC</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>

            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center font-bold">
              U
            </div>

            <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-[#0F1524] border border-white/10 rounded-lg">
              <button className="block w-full px-4 py-2 text-sm hover:bg-white/5">
                Profile
              </button>
              <button className="block w-full px-4 py-2 text-sm hover:bg-white/5">
                Settings
              </button>
              <button className="block w-full px-4 py-2 text-sm text-red-400 hover:bg-white/5">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
