import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Megaphone,
  BarChart3,
  Target,
  Users,
  Settings,
  DollarSign,
} from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Overview' },
  { to: '/campaigns', icon: Megaphone, label: 'Campaigns' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/audiences', icon: Target, label: 'Audiences' },
  { to: '/customers', icon: Users, label: 'Customers' },
  { to: '/billing', icon: DollarSign, label: 'Billing' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function Sidebar({ isOpen }) {
  return (
    <aside
      className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      } z-40`}
    >
      <nav className="p-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span className={`${!isOpen && 'hidden'}`}>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}