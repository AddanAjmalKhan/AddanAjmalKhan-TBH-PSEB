import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0B0F1A] text-white overflow-hidden">

      {/* SIDEBAR (hidden on mobile) */}
      <div className="hidden md:block h-screen sticky top-0 shrink-0">
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
