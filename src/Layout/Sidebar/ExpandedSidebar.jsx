import React from "react";
import SidebarList from "./SidebarList";
import classes from "./expandedsidebar.module.css";

import { Divider } from "@mui/material";
import Logo from "/src/assets/login_logo.svg";
import { list1, list2, list3 } from "../../utils/sidebar";

const ExpandedSidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`${sidebarOpen ? classes.backdrop : ""}`}
        onClick={() => {
          toggleSidebar();
        }}
      ></div>
      <div
        className={`${classes.expanded_sidebar_container} ${
          !sidebarOpen ? classes.close : ""
        }`}
      >
        <div className={classes.expanded_sidebar_contents}>
          <SidebarList heading="Dashboard" list={list1} />
          <Divider className={classes.divider} />
          <SidebarList heading="Widget" list={list2} />
          <Divider className={classes.divider} />
          <SidebarList heading="Widget" list={list3} />
          <Divider className={classes.divider} />
          <SidebarList heading="Widget" list={list3} />
          <Divider className={classes.divider} />
        </div>
      </div>
      {/* Mobile */}
      <div
        className={`${classes.mobile_sidebar_open} ${
          !sidebarOpen ? classes.close : ""
        }`}
      >
        <div className={classes.expanded_sidebar_contents}>
          <div className={classes.logo} style={{ marginTop: "1rem" }}>
            <img src={Logo} alt="navbar logo" />
          </div>
          <SidebarList heading="Dashboard" list={list1} />
          <Divider className={classes.divider} />
          <SidebarList heading="Widget" list={list2} />
          <Divider className={classes.divider} />
          <SidebarList heading="Widget" list={list3} />
          <Divider className={classes.divider} />
          <SidebarList heading="Widget" list={list3} />
          <Divider className={classes.divider} />
        </div>
      </div>
    </>
  );
};

export default ExpandedSidebar;
