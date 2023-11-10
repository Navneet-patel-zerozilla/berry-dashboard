import React, { useState } from "react";
import classes from "./global_dashboard_layout.module.css";
import Navbar from "./Navbar/Navbar";
import SidebarCompact from "./Sidebar/SidebarCompact";
import ExpandedSidebar from "./Sidebar/ExpandedSidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={classes.dashboard}>
      <Navbar toggleSidebar={toggleSidebar} />
      <SidebarCompact sidebarOpen={sidebarOpen} />
      <ExpandedSidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {children}
    </div>
  );
};

export default DashboardLayout;
