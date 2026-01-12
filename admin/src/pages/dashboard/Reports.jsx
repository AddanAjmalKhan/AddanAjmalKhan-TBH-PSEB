// src/pages/dashboard/Reports.jsx

import { Download, FileText, Filter } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: "Monthly Blood Donations",
      type: "Donations",
      period: "December 2025",
      generatedOn: "31-12-2025",
      status: "Completed",
    },
    {
      id: 2,
      title: "Blood Stock Inventory",
      type: "Inventory",
      period: "Current",
      generatedOn: "31-12-2025",
      status: "Completed",
    },
    {
      id: 3,
      title: "Registered Users Report",
      type: "Users",
      period: "Q4 2025",
      generatedOn: "30-12-2025",
      status: "Pending",
    },
    {
      id: 4,
      title: "Critical Blood Alerts",
      type: "Alerts",
      period: "Last 30 Days",
      generatedOn: "29-12-2025",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white text-black rounded-xl p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Reports</h1>
          <p className="text-sm text-gray-500">
            Generate, review, and download system reports.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
          <FileText size={16} />
          Generate Report
        </button>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-4">
        <select className="border rounded-lg px-4 py-2 text-sm">
          <option>All Report Types</option>
          <option>Donations</option>
          <option>Inventory</option>
          <option>Users</option>
          <option>Alerts</option>
        </select>

        <select className="border rounded-lg px-4 py-2 text-sm">
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>

        <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
          <Filter size={14} />
          Apply Filters
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-3 text-left">Report</th>
            <th className="text-left">Type</th>
            <th className="text-left">Period</th>
            <th className="text-left">Generated On</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-b last:border-0">
              <td className="py-4">
                <div className="font-medium">{report.title}</div>
                <div className="text-xs text-gray-500">
                  Report ID: #{report.id}
                </div>
              </td>

              <td>{report.type}</td>
              <td>{report.period}</td>
              <td>{report.generatedOn}</td>

              <td className="text-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    report.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {report.status}
                </span>
              </td>

              <td className="text-center">
                {report.status === "Completed" ? (
                  <button className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
                    <Download size={16} />
                    Download
                  </button>
                ) : (
                  <span className="text-xs text-gray-400">
                    Not Available
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Reports;
