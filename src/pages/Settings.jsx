import React, { useState } from "react";
import { PageHeader } from "../components/Common/PageHeader";
import {
  User,
  Bell,
  Shield,
  Globe,
  CreditCard,
  Users,
  Wallet,
  Building,
  ChevronRight,
} from "lucide-react";

const mockProfileData = {
  accountName: "Example Corporation",
  email: "admin@example.com",
  timeZone: "Eastern Time (ET)",
  accountId: "987-654-3210",
  currency: "USD",
  billingInfo: {
    plan: "Premium",
    nextBilling: "January 1, 2024",
    amount: "$999.00",
  },
  notifications: {
    campaigns: true,
    budget: false,
    reports: true,
    security: true,
    updates: false,
  },
};

const mockAccountStatus = {
  accountType: "Enterprise",
  status: "Active",
  memberSince: "January 2022",
  lastLogin: "Today at 10:15 AM",
  securityLevel: "High",
  twoFactorEnabled: true,
  linkedAccounts: 5,
  activeUsers: 15,
};

const mockBillingHistory = [
  {
    date: "Dec 1, 2023",
    amount: "$999.00",
    status: "Paid",
    invoice: "#INV-123",
  },
  {
    date: "Nov 1, 2023",
    amount: "$999.00",
    status: "Paid",
    invoice: "#INV-122",
  },
  {
    date: "Oct 1, 2023",
    amount: "$999.00",
    status: "Paid",
    invoice: "#INV-121",
  },
];

const mockNotificationSettings = [
  { label: "Campaign Updates", key: "campaigns" },
  { label: "Budget Alerts", key: "budget" },
  { label: "Report Summaries", key: "reports" },
  { label: "Security Notifications", key: "security" },
  { label: "Product Updates", key: "updates" },
];

export function Settings() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header */}
      <div className="mb-8">
        <PageHeader title="Account Settings" />
        <div className="text-sm text-gray-500 flex items-center gap-2 mt-2">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Settings</span>
        </div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <nav className="space-y-1">
              {[
                { icon: User, label: "Profile", id: "profile" },
                { icon: Bell, label: "Notifications", id: "notifications" },
                { icon: Shield, label: "Security", id: "security" },
                { icon: Building, label: "Organization", id: "organization" },
                { icon: Wallet, label: "Billing", id: "billing" },
                { icon: Users, label: "Team", id: "team" },
                { icon: Globe, label: "Preferences", id: "preferences" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      activeSection === item.id
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Dynamic Sections */}
          {activeSection === "profile" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold">Profile Information</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={mockProfileData.accountName}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={mockProfileData.email}
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}
          {activeSection === "notifications" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold">Notification Settings</h2>
              <div className="mt-4 space-y-4">
                {mockNotificationSettings.map((setting) => (
                  <div
                    key={setting.key}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700">
                      {setting.label}
                    </span>
                    <input
                      type="checkbox"
                      checked={mockProfileData.notifications[setting.key]}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      readOnly
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeSection === "billing" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold">Billing Information</h2>
              <div className="mt-4">
                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    Plan:{" "}
                    <span className="font-medium">
                      {mockProfileData.billingInfo.plan}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Next Billing Date:{" "}
                    <span className="font-medium">
                      {mockProfileData.billingInfo.nextBilling}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Amount:{" "}
                    <span className="font-medium">
                      {mockProfileData.billingInfo.amount}
                    </span>
                  </p>
                </div>
                <div className="divide-y">
                  {mockBillingHistory.map((entry, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 text-sm"
                    >
                      <span>{entry.date}</span>
                      <span>{entry.invoice}</span>
                      <span>{entry.amount}</span>
                      <span
                        className={`${
                          entry.status === "Paid"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {entry.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}