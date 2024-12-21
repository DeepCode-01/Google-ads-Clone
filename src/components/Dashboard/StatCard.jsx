import React from 'react';

export function StatCard({ title, value, change, isPositive, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        <div
          className={`p-3 rounded-full ${
            isPositive ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <Icon
            className={`w-6 h-6 ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          />
        </div>
      </div>
      <p
        className={`mt-2 text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {change} vs last week
      </p>
    </div>
  );
}