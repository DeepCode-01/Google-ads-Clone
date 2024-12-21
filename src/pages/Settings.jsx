import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { User, Bell, Shield, Globe, CreditCard, HelpCircle } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <PageHeader title="Account Settings" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  value="Google Ads Account"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg"
                  value="admin@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Zone
                </label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Eastern Time (ET)</option>
                  <option>Pacific Time (PT)</option>
                  <option>Central Time (CT)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Campaign Performance Alerts</p>
                  <p className="text-sm text-gray-600">Get notified about significant changes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Budget Alerts</p>
                  <p className="text-sm text-gray-600">Notify when nearing budget limits</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Reports</p>
                  <p className="text-sm text-gray-600">Weekly performance summaries</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-gray-600" />
                <span>Edit Profile</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600" />
                <span>Notification Preferences</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-gray-600" />
                <span>Security Settings</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <Globe className="w-5 h-5 text-gray-600" />
                <span>Language & Region</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <span>Billing Settings</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <HelpCircle className="w-5 h-5 text-gray-600" />
                <span>Help & Support</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Account Status</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Account Type</span>
                <span className="font-medium">Professional</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Member Since</span>
                <span className="font-medium">March 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}