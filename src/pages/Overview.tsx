import React from 'react';
import { StatCard } from '../components/Dashboard/StatCard';
import  PerformanceChart from '../components/Dashboard/PerformanceChart';
import {
  TrendingUp,
  MousePointer,
  DollarSign,
  Target,
} from 'lucide-react';

export function Overview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        <div className="flex gap-2">
          <select className="px-4 py-2 border rounded-lg">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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