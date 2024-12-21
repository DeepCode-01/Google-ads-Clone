import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: '2024-03-01', clicks: 4000, impressions: 24000 },
  { date: '2024-03-02', clicks: 3000, impressions: 18000 },
  { date: '2024-03-03', clicks: 2000, impressions: 22000 },
  { date: '2024-03-04', clicks: 2780, impressions: 20000 },
  { date: '2024-03-05', clicks: 1890, impressions: 28000 },
  { date: '2024-03-06', clicks: 2390, impressions: 25000 },
  { date: '2024-03-07', clicks: 3490, impressions: 30000 },
];

function PerformanceChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Performance Over Time</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
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

export default PerformanceChart;