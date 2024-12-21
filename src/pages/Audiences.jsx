import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable } from '../components/Tables/DataTable';
import { Plus, Users, Filter, Search } from 'lucide-react';

const audienceData = [
  {
    id: 1,
    name: 'High-Value Customers',
    type: 'Custom Segment',
    size: '45,000',
    status: 'Active',
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    name: 'Website Visitors',
    type: 'Website Traffic',
    size: '120,000',
    status: 'Active',
    lastUpdated: '2024-03-14'
  },
  {
    id: 3,
    name: 'Cart Abandoners',
    type: 'Custom Intent',
    size: '15,000',
    status: 'Paused',
    lastUpdated: '2024-03-13'
  }
];

const columns = [
  { key: 'name', label: 'Audience Name' },
  { key: 'type', label: 'Type' },
  { key: 'size', label: 'Audience Size' },
  { 
    key: 'status', 
    label: 'Status',
    render: (status) => (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
        status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {status}
      </span>
    )
  },
  { key: 'lastUpdated', label: 'Last Updated' }
];

export function Audiences() {
  return (
    <div className="space-y-6">
      <PageHeader title="Audiences">
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Audience
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Total Reach</h3>
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-3xl font-bold">180,000</p>
          <p className="text-sm text-green-600">+12.5% vs last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Active Audiences</h3>
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm text-gray-600">Out of 10 total</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Avg. Audience Size</h3>
          <p className="text-3xl font-bold">22.5K</p>
          <p className="text-sm text-green-600">+5.2% vs last month</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search audiences"
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
          </div>
        </div>
        <button className="btn btn-secondary flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <DataTable columns={columns} data={audienceData} />
    </div>
  );
}