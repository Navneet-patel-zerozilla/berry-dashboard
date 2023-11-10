import React from "react";
import classes from "./global_dashboard_layout.module.css";

const GlobalDashboardLayout = ({ children }) => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboard_content_container}>
        <div className={classes.dashboard_content}>{children}</div>
      </div>
    </div>
  );
};

export default GlobalDashboardLayout;
