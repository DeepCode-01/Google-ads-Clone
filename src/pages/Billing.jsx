import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { CreditCard, DollarSign, Receipt, AlertCircle } from 'lucide-react';

export function Billing() {
  return (
    <div className="space-y-6">
      <PageHeader title="Billing & Payments">
        <button className="btn btn-primary flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Add Payment Method
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Current Balance</h3>
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-3xl font-bold">$4,567.89</p>
          <p className="text-sm text-gray-600">Next billing date: March 31, 2024</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Monthly Spend</h3>
          <p className="text-3xl font-bold">$12,345</p>
          <p className="text-sm text-green-600">Under monthly budget</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Payment Status</h3>
          <p className="text-xl font-semibold text-green-600">Active</p>
          <p className="text-sm text-gray-600">Auto-pay enabled</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-600">Expires 12/25</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Primary
              </span>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium">•••• •••• •••• 8888</p>
                  <p className="text-sm text-gray-600">Expires 08/24</p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Make Primary
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Receipt className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium">March 2024 Advertising</p>
                  <p className="text-sm text-gray-600">March 15, 2024</p>
                </div>
              </div>
              <p className="font-medium">$2,345.67</p>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Receipt className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium">February 2024 Advertising</p>
                  <p className="text-sm text-gray-600">February 28, 2024</p>
                </div>
              </div>
              <p className="font-medium">$1,987.54</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900">Billing Notice</h3>
            <p className="text-sm text-blue-800 mt-1">
              Your next billing cycle starts on March 31, 2024. To avoid any service interruptions,
              please ensure your payment method is up to date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}