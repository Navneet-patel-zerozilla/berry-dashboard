import React from "react";
import SidebarList from "./SidebarList";

import classes from "./sidebarcompact.module.css";
import { iconNames } from "../../utils/sidebar";

const SidebarCompact = ({ sidebarOpen }) => {
  return (
    <div
      className={`${classes.sidebar_compact} ${
        sidebarOpen ? classes.close : ""
      }`}
    >
      <div className={classes.sidebar_compact_container}>
        {iconNames.map((Icon, index) => (
          <SidebarList
            compact={true}
            key={index}
            tempIndex={index}
            name={Icon.name}
          >
            <Icon.icon />
          </SidebarList>
        ))}
      </div>
    </div>
  );
};

export default SidebarCompact;
