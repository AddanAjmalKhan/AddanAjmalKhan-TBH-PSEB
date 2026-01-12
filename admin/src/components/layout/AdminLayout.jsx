import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const AdminLayout = () => {
  return (
    <div className="flex bg-[#0B0F1A] text-white min-h-screen">

      {/* FIXED SIDEBAR */}
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col h-screen">

        {/* FIXED TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;
