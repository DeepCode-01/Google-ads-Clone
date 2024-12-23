import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, MousePointer, DollarSign, Target } from "lucide-react";

function StatCard({ title, value, change, isPositive, icon: Icon }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs sm:text-sm text-gray-600">{title}</p>
          <h3 className="text-xl sm:text-2xl font-semibold mt-1">{value}</h3>
        </div>
        <div
          className={`p-2 sm:p-3 rounded-full ${
            isPositive ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <Icon
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          />
        </div>
      </div>
      <p
        className={`mt-2 text-xs sm:text-sm ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change} vs last week
      </p>
    </div>
  );
}

const performanceData = [
  { date: "2024-03-01", clicks: 4000, impressions: 24000 },
  { date: "2024-03-02", clicks: 3000, impressions: 18000 },
  { date: "2024-03-03", clicks: 2000, impressions: 22000 },
  { date: "2024-03-04", clicks: 2780, impressions: 20000 },
  { date: "2024-03-05", clicks: 1890, impressions: 28000 },
  { date: "2024-03-06", clicks: 2390, impressions: 25000 },
  { date: "2024-03-07", clicks: 3490, impressions: 30000 },
];

function PerformanceChart() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <h2 className="text-base sm:text-lg font-semibold mb-4">Performance Over Time</h2>
      <div className="h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="clicks"
              stackId="1"
              stroke="#1a73e8"
              fill="#1a73e8"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="impressions"
              stackId="2"
              stroke="#34a853"
              fill="#34a853"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
        <h1 className="text-xl sm:text-2xl font-semibold">Dashboard Overview</h1>
        <div className="w-full sm:w-auto">
          <select className="w-full sm:w-auto px-3 sm:px-4 py-2 border rounded-lg text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          title="Impressions"
          value="125.4K"
          change="+12.5%"
          isPositive={true}
          icon={TrendingUp}
        />
        <StatCard
          title="Clicks"
          value="12.5K"
          change="+8.2%"
          isPositive={true}
          icon={MousePointer}
        />
        <StatCard
          title="Spend"
          value="$4,567"
          change="-2.4%"
          isPositive={false}
          icon={DollarSign}
        />
        <StatCard
          title="Conversions"
          value="436"
          change="+14.6%"
          isPositive={true}
          icon={Target}
        />
      </div>

      <PerformanceChart />
    </div>
  );
}

export default Overview;