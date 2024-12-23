import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  ArrowUp,
  ArrowDown,
  DollarSign,
  MousePointer,
  Eye,
  Target,
  Search,
  Filter,
  Download,
  Settings,
  Menu,
  X,
} from "lucide-react";

const performanceData = [
  { date: "01/03", clicks: 2400, impressions: 4000, cost: 240 },
  { date: "02/03", clicks: 1398, impressions: 3000, cost: 210 },
  { date: "03/03", clicks: 9800, impressions: 2000, cost: 290 },
  { date: "04/03", clicks: 3908, impressions: 2780, cost: 320 },
  { date: "05/03", clicks: 4800, impressions: 1890, cost: 270 },
  { date: "06/03", clicks: 3800, impressions: 2390, cost: 310 },
  { date: "07/03", clicks: 4300, impressions: 3490, cost: 290 },
];

const campaignData = [
  {
    id: 1,
    name: "Summer Sale Campaign",
    status: "Active",
    budget: "$500/day",
    spent: "$1,234",
    clicks: "1.2K",
    conversions: "234",
  },
  {
    id: 2,
    name: "Brand Awareness",
    status: "Active",
    budget: "$300/day",
    spent: "$890",
    clicks: "956",
    conversions: "123",
  },
  {
    id: 3,
    name: "Product Launch",
    status: "Paused",
    budget: "$750/day",
    spent: "$2,100",
    clicks: "2.5K",
    conversions: "345",
  },
];

export function Customers() {
  const [timeRange, setTimeRange] = useState("7days");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white p-4 lg:p-6 shadow-sm mb-4 lg:mb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                Google Ads Dashboard
              </h1>

              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="bg-transparent border-none focus:outline-none ml-2 w-48"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-white text-gray-700 shadow-md px-4 py-2 flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-100 transition duration-200">
                <Filter className="h-4 w-4 text-gray-500" />
                <span>Filters</span>
              </button>
              <button className="bg-white text-gray-700 shadow-md px-4 py-2 flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-100 transition duration-200">
                <Download className="h-4 w-4 text-gray-500" />
                <span>Export</span>
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                + New Campaign
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="bg-transparent border-none focus:outline-none ml-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <button className="bg-white text-gray-700 shadow-md px-4 py-2 flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-100 transition duration-200">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span>Filters</span>
                </button>
                <button className="bg-white text-gray-700 shadow-md px-4 py-2 flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-100 transition duration-200">
                  <Download className="h-4 w-4 text-gray-500" />
                  <span>Export</span>
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 w-full">
                  + New Campaign
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <select
            className="border rounded-lg px-4 py-2"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="custom">Custom range</option>
          </select>
          <div className="text-sm text-gray-500">Mar 1, 2024 - Mar 7, 2024</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <MetricCard
            title="Total Spend"
            value="$12,345"
            change="+12.5%"
            positive={true}
            icon={<DollarSign />}
            bgColor="bg-blue-50"
            iconColor="text-blue-600"
            subtext="Budget: $15,000"
          />
          <MetricCard
            title="Clicks"
            value="45.2K"
            change="+8.1%"
            positive={true}
            icon={<MousePointer />}
            bgColor="bg-green-50"
            iconColor="text-green-600"
            subtext="Goal: 50K"
          />
          <MetricCard
            title="Impressions"
            value="128K"
            change="-2.3%"
            positive={false}
            icon={<Eye />}
            bgColor="bg-purple-50"
            iconColor="text-purple-600"
            subtext="Goal: 150K"
          />
          <MetricCard
            title="Conversions"
            value="1,234"
            change="+5.7%"
            positive={true}
            icon={<Target />}
            bgColor="bg-orange-50"
            iconColor="text-orange-600"
            subtext="Goal: 1.5K"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-2 lg:space-y-0">
              <h2 className="text-lg lg:text-xl font-semibold">
                Performance Trends
              </h2>
              <select className="border rounded-lg px-3 py-2">
                <option>Clicks</option>
                <option>Impressions</option>
                <option>Cost</option>
                <option>CTR</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="impressions"
                    stroke="#7c3aed"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="cost"
                    stroke="#059669"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
            <h2 className="text-lg lg:text-xl font-semibold mb-6">
              Campaign Performance
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="clicks" fill="#2563eb" />
                  <Bar dataKey="impressions" fill="#7c3aed" />
                  <Bar dataKey="cost" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="p-4 lg:p-6 border-b flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-2 lg:space-y-0">
            <h2 className="text-lg lg:text-xl font-semibold">
              Active Campaigns
            </h2>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button className="bg-white text-gray-700 shadow-md px-3 lg:px-4 py-2 flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-100 transition duration-200">
                <Settings className="h-4 w-4 text-gray-500" />
                <span className="hidden lg:inline">Columns</span>
              </button>
              <button className="bg-white text-gray-700 shadow-md px-3 lg:px-4 py-2 flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-100 transition duration-200">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="hidden lg:inline">Filter</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Spent
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clicks
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campaignData.map((campaign) => (
                  <tr key={campaign.id}>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {campaign.name}
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          campaign.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {campaign.budget}
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {campaign.spent}
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {campaign.clicks}
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {campaign.conversions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  positive,
  icon,
  bgColor,
  iconColor,
  subtext,
}) {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
            {value}
          </h3>
          <p className="text-gray-500 text-xs lg:text-sm">{subtext}</p>
        </div>
        <div className={`${iconColor} p-2 rounded-lg`}>{icon}</div>
      </div>
      <div
        className={`flex items-center mt-2 ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="text-sm ml-1">{change}</span>
      </div>
    </div>
  );
}
