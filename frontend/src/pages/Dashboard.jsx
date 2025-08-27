import React from 'react';
import Navbar from '../components/Navbar.jsx';
import StatsCard from '../components/StatsCard.jsx';
import RecentActivity from '../components/RecentActivity.jsx';

const Dashboard = () => {
  return (
   <div className="px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Dashboard Title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">Dashboard</p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 p-4">
                <StatsCard title={"Total Products"} number={1250}/>
                <StatsCard title={"Total Customers"} number={850}/>
                <StatsCard title={"Total Vendors"} number={150}/>
                <StatsCard title={"Recent Activities"} number={20}/>
            </div>

            {/* Recent Activities Section */}
           <RecentActivity/>
          </div>
        </div>
  );
};

export default Dashboard;