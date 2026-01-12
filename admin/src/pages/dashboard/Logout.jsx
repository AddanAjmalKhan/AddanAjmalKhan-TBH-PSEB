import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // or auth cleanup
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-[70vh]">

      <div className="bg-[#0F1524] border border-white/10 rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-xl font-semibold text-white mb-2">
          Confirm Logout
        </h1>

        <p className="text-gray-400 text-sm mb-6">
          Are you sure you want to logout from Blood Heroes Admin Panel?
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          You will need to log in again to access admin features.
        </div>
      </div>

    </div>
  );
};

export default Logout;
