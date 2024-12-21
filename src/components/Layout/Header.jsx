import React from 'react';
import { Menu, Bell, HelpCircle, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header({ toggleSidebar }) {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/ads_48dp.png"
              alt="Google Ads"
              className="h-6"
            />
            <span className="text-xl font-medium hidden sm:block">Google Ads</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}