import { User, Bell, Shield } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-8">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">
          Manage your account and system preferences
        </p>
      </div>

      {/* PROFILE SETTINGS */}
      <div className="bg-[#0F1524] border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <User className="text-blue-400" size={20} />
          <h2 className="text-lg font-medium text-white">Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-[#070B14] border border-white/10 rounded-lg px-4 py-2 text-sm text-white outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#070B14] border border-white/10 rounded-lg px-4 py-2 text-sm text-white outline-none"
          />
        </div>
      </div>

      {/* NOTIFICATION SETTINGS */}
      <div className="bg-[#0F1524] border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-yellow-400" size={20} />
          <h2 className="text-lg font-medium text-white">Notifications</h2>
        </div>

        <div className="space-y-3 text-sm">
          <label className="flex items-center gap-3 text-gray-300">
            <input type="checkbox" defaultChecked />
            Email alerts for critical blood shortages
          </label>
          <label className="flex items-center gap-3 text-gray-300">
            <input type="checkbox" defaultChecked />
            Monthly donation summary
          </label>
          <label className="flex items-center gap-3 text-gray-300">
            <input type="checkbox" />
            System announcements
          </label>
        </div>
      </div>

      {/* SECURITY SETTINGS */}
      <div className="bg-[#0F1524] border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="text-green-400" size={20} />
          <h2 className="text-lg font-medium text-white">Security</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="password"
            placeholder="New Password"
            className="bg-[#070B14] border border-white/10 rounded-lg px-4 py-2 text-sm text-white outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-[#070B14] border border-white/10 rounded-lg px-4 py-2 text-sm text-white outline-none"
          />
        </div>
      </div>

    </div>
  );
};

export default Settings;
