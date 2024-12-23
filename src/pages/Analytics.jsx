import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Calendar, Download } from "lucide-react";

const performanceData = [
  { date: "03/01", clicks: 4000, impressions: 24000, conversions: 120 },
  { date: "03/02", clicks: 3000, impressions: 18000, conversions: 90 },
  { date: "03/03", clicks: 2000, impressions: 22000, conversions: 100 },
  { date: "03/04", clicks: 2780, impressions: 20000, conversions: 95 },
  { date: "03/05", clicks: 1890, impressions: 28000, conversions: 140 },
  { date: "03/06", clicks: 2390, impressions: 25000, conversions: 110 },
  { date: "03/07", clicks: 3490, impressions: 30000, conversions: 150 },
];

const keywordData = [
  { keyword: "Digital Marketing", clicks: 1200, ctr: "4.5%", cost: "$2.30" },
  { keyword: "SEO Services", clicks: 980, ctr: "3.8%", cost: "$1.95" },
  { keyword: "Social Media", clicks: 850, ctr: "3.2%", cost: "$2.10" },
  { keyword: "Content Strategy", clicks: 750, ctr: "2.9%", cost: "$1.85" },
  { keyword: "PPC Management", clicks: 600, ctr: "2.5%", cost: "$2.45" },
];

const deviceData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 40 },
  { name: "Tablet", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export function Analytics() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Analytics</h1>
        <div className="flex flex-wrap w-full sm:w-auto gap-2">
          <button className="flex-1 sm:flex-none btn btn-secondary flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            <span>Date Range</span>
          </button>
          <button className="flex-1 sm:flex-none btn btn-secondary flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Click-through Rate</h3>
          <p className="text-3xl font-bold text-blue-600">5.8%</p>
          <p className="text-sm text-green-600 mt-1">+0.5% vs last period</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold text-blue-600">2.3%</p>
          <p className="text-sm text-red-600 mt-1">-0.2% vs last period</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Cost per Click</h3>
          <p className="text-3xl font-bold text-blue-600">$1.24</p>
          <p className="text-sm text-green-600 mt-1">-$0.12 vs last period</p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
        <div className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="clicks"
                stroke="#8884d8"
                name="Clicks"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="impressions"
                stroke="#82ca9d"
                name="Impressions"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Top Performing Keywords
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Keyword
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Clicks
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      CTR
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {keywordData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {item.keyword}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {item.clicks}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {item.ctr}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {item.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Device Distribution</h2>
          <div className="h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}