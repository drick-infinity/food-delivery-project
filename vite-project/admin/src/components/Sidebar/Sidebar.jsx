import React from 'react';
import { assets } from '../../assets/admin_assets/assets';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <img src={assets.add_icon} alt="Add Icon" className="w-6 h-6" />
          <p className="text-lg font-medium">Add Items</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <img src={assets.order_icon} alt="Order Icon" className="w-6 h-6" />
          <p className="text-lg font-medium">Orders</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <img src={assets.order_icon} alt="Other Icon" className="w-6 h-6" />
          <p className="text-lg font-medium">Other</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
