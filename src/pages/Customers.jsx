import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable } from '../components/Tables/DataTable';
import { Search, Filter, Download, Users } from 'lucide-react';

const customerData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    status: 'Active',
    totalSpent: '$1,234',
    lastPurchase: '2024-03-15',
    location: 'New York, USA'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'Active',
    totalSpent: '$2,845',
    lastPurchase: '2024-03-14',
    location: 'London, UK'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    status: 'Inactive',
    totalSpent: '$567',
    lastPurchase: '2024-02-28',
    location: 'Toronto, CA'
  }
];

const columns = [
  { key: 'name', label: 'Customer Name' },
  { key: 'email', label: 'Email' },
  { 
    key: 'status', 
    label: 'Status',
    render: (status) => (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
        status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    )
  },
  { key: 'totalSpent', label: 'Total Spent' },
  { key: 'lastPurchase', label: 'Last Purchase' },
  { key: 'location', label: 'Location' }
];

export function Customers() {
  return (
    <div className="space-y-6">
      <PageHeader title="Customers">
        <button className="btn btn-secondary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Total Customers</h3>
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-3xl font-bold">1,234</p>
          <p className="text-sm text-green-600">+8.5% vs last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Active Customers</h3>
          <p className="text-3xl font-bold">892</p>
          <p className="text-sm text-green-600">72% of total</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Avg. Lifetime Value</h3>
          <p className="text-3xl font-bold">$856</p>
          <p className="text-sm text-green-600">+12.3% vs last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">New This Month</h3>
          <p className="text-3xl font-bold">124</p>
          <p className="text-sm text-green-600">+15.2% vs last month</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers"
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
          </div>
        </div>
        <button className="btn btn-secondary flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <DataTable columns={columns} data={customerData} />
    </div>
  );
} 