import React from 'react';
import { BarChart } from 'recharts';
import { Calendar, Download } from 'lucide-react';

const performanceData = [
  { date: '2024-03-01', clicks: 4000, impressions: 24000, conversions: 120 },
  { date: '2024-03-02', clicks: 3000, impressions: 18000, conversions: 90 },
  { date: '2024-03-03', clicks: 2000, impressions: 22000, conversions: 100 },
  { date: '2024-03-04', clicks: 2780, impressions: 20000, conversions: 95 },
  { date: '2024-03-05', clicks: 1890, impressions: 28000, conversions: 140 },
  { date: '2024-03-06', clicks: 2390, impressions: 25000, conversions: 110 },
  { date: '2024-03-07', clicks: 3490, impressions: 30000, conversions: 150 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Date Range
          </button>
          <button className="btn btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
        <div className="h-[400px]">
          {/* Add a bar chart here using Recharts */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Top Performing Keywords</h2>
          <div className="space-y-4">
            {/* Add keyword performance list here */}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Device Distribution</h2>
          <div className="h-[300px]">
            {/* Add pie chart for device distribution */}
          </div>
        </div>
      </div>
    </div>
  );
}