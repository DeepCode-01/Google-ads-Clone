import React from "react";
import {
  Menu,
  Bell,
  HelpCircle,
  Settings,
  User,
  Search,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Header({ toggleSidebar }) {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="flex items-center justify-between px-4 h-14 ">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full hidden md:flex"
          >
            <Menu className="md:w-5 md:h-5 w-4 h-4" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/ads_48dp.png"
              alt="Google Ads"
              className="h-6"
            />
            <span className="text-xl font-medium hidden sm:block">
              Google Ads
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-4 ">
          <div className="flex flex-col items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="md:w-5 md:h-5 w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500 hidden md:flex">Search</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <RefreshCw className="md:w-5 md:h-5 w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500 hidden md:flex">Refresh</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <HelpCircle className="md:w-5 md:h-5 w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500 hidden md:flex">Help</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="md:w-5 md:h-5 w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500 hidden md:flex">Settings</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="md:w-5 md:h-5 w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500 hidden md:flex">Notifications</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="md:w-5 md:h-5 w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500 hidden md:flex">Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
}