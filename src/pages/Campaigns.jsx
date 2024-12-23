import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Edit,
  Trash2,
  PauseCircle,
  PlayCircle,
} from "lucide-react";


const campaignStats = {
  totalSpend: { value: "$45,678", change: "+12.3%" },
  activeCount: { value: "24", change: "+4" },
  totalClicks: { value: "125.4K", change: "+15.2%" },
  avgCTR: { value: "5.67%", change: "+0.5%" },
};


const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2024",
    status: "Active",
    budget: "$500/day",
    spent: "$1,234",
    clicks: "2.5K",
    impressions: "45K",
    ctr: "5.5%",
    conversions: "234",
    costPerClick: "$0.49",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    performance: "+15%",
    targeting: "United States, Ages 25-34",
    objective: "Sales",
  },
  {
    id: 2,
    name: "Brand Awareness Campaign",
    status: "Paused",
    budget: "$300/day",
    spent: "$890",
    clicks: "1.8K",
    impressions: "32K",
    ctr: "5.6%",
    conversions: "156",
    costPerClick: "$0.52",
    startDate: "2024-02-15",
    endDate: "2024-03-15",
    performance: "+8%",
    targeting: "Global, Ages 18-65",
    objective: "Awareness",
  },
  {
    id: 3,
    name: "Spring Collection Launch",
    status: "Active",
    budget: "$750/day",
    spent: "$2,250",
    clicks: "4.2K",
    impressions: "68K",
    ctr: "6.2%",
    conversions: "345",
    costPerClick: "$0.45",
    startDate: "2024-03-10",
    endDate: "2024-04-10",
    performance: "+22%",
    targeting: "Europe, Ages 25-44",
    objective: "Sales",
  },
  {
    id: 4,
    name: "Mobile App Install",
    status: "Draft",
    budget: "$400/day",
    spent: "$0",
    clicks: "0",
    impressions: "0",
    ctr: "0%",
    conversions: "0",
    costPerClick: "$0.00",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    performance: "0%",
    targeting: "United States, Mobile Users",
    objective: "App Install",
  },
];

export function Campaigns() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [dateRange, setDateRange] = useState("7d");

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
        <span className="text-sm text-gray-500 ml-2">vs last period</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
            <p className="text-sm text-gray-600">
              Manage and monitor your advertising campaigns
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              New Campaign
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Spend"
            value={campaignStats.totalSpend.value}
            change={campaignStats.totalSpend.change}
            icon={DollarSign}
          />
          <StatCard
            title="Active Campaigns"
            value={campaignStats.activeCount.value}
            change={campaignStats.activeCount.change}
            icon={Target}
          />
          <StatCard
            title="Total Clicks"
            value={campaignStats.totalClicks.value}
            change={campaignStats.totalClicks.change}
            icon={Users}
          />
          <StatCard
            title="Average CTR"
            value={campaignStats.avgCTR.value}
            change={campaignStats.avgCTR.change}
            icon={TrendingUp}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <select
              className="form-select rounded-lg border-gray-300"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <select
              className="form-select rounded-lg border-gray-300"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="draft">Draft</option>
            </select>
            <button className="btn btn-secondary flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Campaign Name
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
                  Budget
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Spent
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Clicks
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Impressions
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  CTR
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Conversions
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Cost Per Click
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Start Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  End Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">
                        {campaign.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : campaign.status === "Paused"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.budget}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.spent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.clicks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.impressions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.ctr}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.conversions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.costPerClick}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      {campaign.status === "Active" ? (
                        <button className="text-yellow-600 hover:text-yellow-900">
                          <PauseCircle className="w-5 h-5" />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900">
                          <PlayCircle className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}