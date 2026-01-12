import {
  Users,
  Droplet,
  Activity,
  AlertTriangle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/* ================= DATA ================= */

const COLORS = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b"];

const donorCities = [
  { name: "Islamabad", value: 40 },
  { name: "Peshawar", value: 25 },
  { name: "Abbottabad", value: 20 },
  { name: "Others", value: 15 },
];

const userCities = [
  { name: "Islamabad", value: 35 },
  { name: "Peshawar", value: 30 },
  { name: "Abbottabad", value: 25 },
  { name: "Others", value: 10 },
];

const stats = [
  {
    title: "Total Users",
    value: "2,543",
    change: "+12%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Total Donors",
    value: "1,234",
    change: "+5%",
    icon: Droplet,
    color: "text-red-500",
  },
  {
    title: "Blood Units",
    value: "456",
    change: "-2%",
    icon: Activity,
    color: "text-green-500",
  },
  {
    title: "Critical Alerts",
    value: "3",
    change: "Urgent",
    icon: AlertTriangle,
    color: "text-yellow-500",
  },
];

/* ================= COMPONENT ================= */

const Dashboard = () => {
  return (
    /* PAGE CONTAINER (WHITE LIKE USERS / DONORS) */
    <div className="bg-white rounded-xl p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-black">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of blood bank activity
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                {item.title}
              </span>
              <item.icon className={item.color} />
            </div>

            <h2 className="text-3xl font-bold mt-4 text-black">
              {item.value}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {item.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4 text-black">
            Donors by City
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={donorCities}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
              >
                {donorCities.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4 text-black">
            Users by City
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={userCities}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
              >
                {userCities.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
