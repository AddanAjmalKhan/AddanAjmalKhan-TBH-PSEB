import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/dashboard/Users";
import Donors from "../pages/dashboard/Donors";
import Reports from "../pages/dashboard/Reports";
import Settings from "../pages/dashboard/Settings";
import Logout from "../pages/dashboard/Logout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import AdminLayout from "../components/layout/AdminLayout";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected Admin */}
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
