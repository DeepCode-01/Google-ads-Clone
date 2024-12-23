import React from "react";
import {
  CreditCard,
  DollarSign,
  AlertCircle,
  TrendingUp,
  Calendar,
  Settings,
} from "lucide-react";

const invoices = [
  {
    id: "INV-2024-001",
    date: "March 15, 2024",
    amount: 2345.67,
    status: "Paid",
    campaign: "Spring Campaign 2024",
  },
  {
    id: "INV-2024-002",
    date: "February 28, 2024",
    amount: 1987.54,
    status: "Paid",
    campaign: "Winter Promo 2024",
  },
  {
    id: "INV-2024-003",
    date: "January 20, 2024",
    amount: 1500.0,
    status: "Paid",
    campaign: "New Year Campaign 2024",
  },
  {
    id: "INV-2024-004",
    date: "December 15, 2023",
    amount: 1750.75,
    status: "Paid",
    campaign: "Holiday Campaign 2023",
  },
];

const paymentMethods = [
  {
    id: "PM-001",
    cardNumber: "•••• •••• •••• 4242",
    expiry: "12/25",
    primary: true,
  },
  {
    id: "PM-002",
    cardNumber: "•••• •••• •••• 8888",
    expiry: "08/24",
    primary: false,
  },
  {
    id: "PM-003",
    cardNumber: "•••• •••• •••• 1234",
    expiry: "05/23",
    primary: false,
  },
];

export function Billing() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Billing & Payments
            </h1>
            <p className="text-gray-600">
              Manage your billing information and view transactions
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Settings className="w-4 h-4 mr-2 inline" />
              Billing Settings
            </button>
            <button className="btn-primary px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              <CreditCard className="w-4 h-4 mr-2 inline" />
              Add Payment Method
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Current Balance
              </h3>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">$4,567.89</p>
            <div className="mt-2 flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              Next billing: March 31
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Monthly Spend
              </h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">$12,345</p>
            <p className="mt-2 text-sm text-green-600">+15.3% vs last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Total Spend</h3>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">$45,678.90</p>
            <p className="mt-2 text-sm text-gray-600">Year to date</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Average Spend
              </h3>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">$3,806.58</p>
            <p className="mt-2 text-sm text-gray-600">Per month</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Payment Methods Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Payment Methods</h2>
              </div>
              <div className="p-6 space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{method.cardNumber}</p>
                        <p className="text-sm text-gray-600">
                          Expires {method.expiry}
                        </p>
                      </div>
                    </div>
                    {method.primary ? (
                      <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                        Primary
                      </span>
                    ) : (
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Make Primary
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>
              <div className="p-6 space-y-4">
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">{invoice.campaign}</p>
                      <p className="text-sm text-gray-600">{invoice.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${invoice.amount}</p>
                      <span className="text-xs text-green-600">
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notification Banner */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900">Important Notice</h3>
              <p className="text-sm text-blue-800 mt-1">
                Your next billing cycle starts on March 31, 2024. To avoid any
                service interruptions, please ensure your payment method is up
                to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}