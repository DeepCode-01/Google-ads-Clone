import React, { useState } from "react";
import {
  Plus,
  Users,
  Filter,
  Search,
  ChevronDown,
  Settings,
  BarChart2,
  Target,
} from "lucide-react";

export const audienceData = [
  {
    id: 1,
    name: "High-Value Customers",
    type: "Custom Segment",
    size: "45,000",
    status: "Active",
    lastUpdated: "2024-03-15",
    performance: "+15%",
    clicks: "2,300",
    impressions: "45,000",
    ctr: "5.11%",
    cost: "$1,234.56",
  },
  {
    id: 2,
    name: "Cart Abandoners",
    type: "Website Visitors",
    size: "28,500",
    status: "Active",
    lastUpdated: "2024-03-14",
    performance: "+8%",
    clicks: "1,800",
    impressions: "32,000",
    ctr: "5.62%",
    cost: "$956.40",
  },
  {
    id: 3,
    name: "Frequent Buyers",
    type: "Custom Segment",
    size: "15,000",
    status: "Inactive",
    lastUpdated: "2024-03-10",
    performance: "-5%",
    clicks: "1,200",
    impressions: "20,000",
    ctr: "6.00%",
    cost: "$500.00",
  },
  {
    id: 4,
    name: "Newsletter Subscribers",
    type: "Email List",
    size: "10,000",
    status: "Active",
    lastUpdated: "2024-03-12",
    performance: "+10%",
    clicks: "900",
    impressions: "15,000",
    ctr: "6.00%",
    cost: "$300.00",
  },
];

export const dashboardStats = {
  totalReach: {
    value: "180,000",
    change: "+12.5%",
    period: "vs last month",
  },
  activeAudiences: {
    value: "24",
    change: "+4",
    period: "vs last month",
  },
  avgEngagement: {
    value: "5.2%",
    change: "+0.8%",
    period: "vs last month",
  },
};

export function Audiences() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const StatCard = ({ title, value, change, icon: Icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <div className="mt-2 flex items-center">
        <span
          className={`text-sm font-medium ${
            change.startsWith("+") ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 py-6 space-y-6">
        {/* Top Navigation */}
        <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-30">
          <div className="max-w-[1600px] mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
                <div className="ml-4 flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Campaigns
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Audiences
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <button className="ml-4 text-gray-500 hover:text-gray-900">
                  <Settings className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Audiences
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage and analyze your audience segments
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-secondary flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </button>
              <button className="btn-primary flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Audience
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Total Reach"
              value={dashboardStats.totalReach.value}
              change={dashboardStats.totalReach.change}
              icon={Users}
            />
            <StatCard
              title="Active Audiences"
              value={dashboardStats.activeAudiences.value}
              change={dashboardStats.activeAudiences.change}
              icon={Target}
            />
            <StatCard
              title="Avg. Engagement"
              value={dashboardStats.avgEngagement.value}
              change={dashboardStats.avgEngagement.change}
              icon={BarChart2}
            />
          </div>
        </div>

        {/* View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search audiences..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <select className="form-select rounded-lg border-gray-300 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="btn-secondary px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Audience Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Size
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Performance
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {audienceData.map((audience) => (
                <tr key={audience.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium text-gray-900">
                        {audience.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {audience.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {audience.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                        audience.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {audience.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={
                        audience.performance.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {audience.performance}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {audience.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && (
        <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl p-6 z-40">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Filters</h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-black-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>
          {/* Filter options */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All Types</option>
                <option>Custom Segment</option>
                <option>Website Visitors</option>
                <option>Email List</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}