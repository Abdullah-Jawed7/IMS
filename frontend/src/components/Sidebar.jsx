import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Warehouse, 
  ShoppingCart, 
  Users, 
  Building2, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  ChevronLeft 
} from 'lucide-react';

const Sidebar = ({ isOpen = true, onToggle }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard'
    },
    {
      id: 'products',
      label: 'Products',
      icon: <Package size={20} />,
      path: '/products'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: <Warehouse size={20} />,
      path: '/inventory'
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: <ShoppingCart size={20} />,
      path: '/orders'
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: <Users size={20} />,
      path: '/customers'
    },
    {
      id: 'vendors',
      label: 'Vendors',
      icon: <Building2 size={20} />,
      path: '/vendors'
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: <BarChart3 size={20} />,
      path: '/reports'
    }
  ];

  const bottomMenuItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={20} />,
      path: '/settings'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: <HelpCircle size={20} />,
      path: '/help'
    }
  ];

  return (
    <div 
      className={`relative  min-h-screen   inset-y-0 -translate-x-0 lg:translate-x-0 lg:static lg:inset-0 left-0 top-0 h-full bg-slate-50 border-r border-solid border-[#cedbe8] transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-solid border-[#cedbe8] bg-slate-50">
        <div className="flex items-center gap-4 text-[#0d141c]">
          <div className="size-6 flex-shrink-0">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          {isOpen && (
            <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">
              StockPilot
            </h2>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <div className="absolute -right-3 top-20 z-10">
        <button
          onClick={onToggle}
          className="w-6 h-6 bg-[#0d141c] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#49719c] transition-colors border border-solid border-[#cedbe8]"
        >
          <ChevronLeft 
            size={12}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group ${
                activeItem === item.id
                  ? 'bg-[#e7edf4] text-[#0d141c] border border-solid border-[#cedbe8]'
                  : 'text-[#49719c] hover:bg-[#e7edf4] hover:text-[#0d141c]'
              }`}
            >
              <span className={`flex-shrink-0 ${
                activeItem === item.id ? 'text-[#0d141c]' : 'text-[#49719c] group-hover:text-[#0d141c]'
              }`}>
                {item.icon}
              </span>
              {isOpen && (
                <span className="text-sm font-medium leading-normal">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="px-4 py-4 border-t border-solid border-[#cedbe8]">
        <div className="space-y-2">
          {bottomMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group ${
                activeItem === item.id
                  ? 'bg-[#e7edf4] text-[#0d141c] border border-solid border-[#cedbe8]'
                  : 'text-[#49719c] hover:bg-[#e7edf4] hover:text-[#0d141c]'
              }`}
            >
              <span className={`flex-shrink-0 ${
                activeItem === item.id ? 'text-[#0d141c]' : 'text-[#49719c] group-hover:text-[#0d141c]'
              }`}>
                {item.icon}
              </span>
              {isOpen && (
                <span className="text-sm font-medium leading-normal">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* User Profile Section */}
      {isOpen && (
        <div className="px-4 py-4 border-t border-solid border-[#cedbe8]">
          <div className="flex items-center gap-3 px-3 py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 flex-shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDP5JnXouprLFn0I42VSAaD03gy92pMdN7TxQPhxIXXDMmTLFAEzHIM_dePVdm9Yx_rdJk2i1JFXuF5xDf0kYJv5TF4kKDamAnYdhufRj2UAdIlzH9_oT2P2X7_070uPJ_TjVNBpAVf6DK0urzkxCvtjZQmTHQL7ExcNzQ2mJRFDm5tME23hQZJilNj4x9jliyBTnVOdaQ1Brtdmvs0HU_NrZF26Co0aJkVPKNj7vzRcB5Qarwao7-qOvWTh2iIhFA7-TQ6UZ-w9BC2")'
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#0d141c] truncate">John Doe</p>
              <p className="text-xs text-[#49719c] truncate">Administrator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;