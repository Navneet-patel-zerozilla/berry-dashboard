import React from "react";
import classes from "./sidebarlist.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import SidebarAccordion from "./SidebarAccordion";

const SidebarList = ({
  heading,
  list,
  compact = false,
  children,
  name = "dashboard",
}) => {
  const path = useLocation().pathname;

  if (compact) {
    return (
      <NavLink
        to={`${name === "Dashboard" ? "/dashboard" : name.toLocaleLowerCase()}`}
        className={`${classes.icon_container} ${
          path === "/dashboard/" + name.toLowerCase() ||
          path === "/" + name.toLowerCase()
            ? classes.active_link
            : ""
        }`}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <ul className={classes.list_container}>
      <span className={classes.link_heading}>{heading}</span>
      {list?.map((item, index) => {
        if (item.accordion) {
          return (
            <SidebarAccordion
              key={index}
              heading={item.name}
              Icon={item.icon}
              items={item.accordionItems}
            >
              <item.icon className={classes.link_icon} />
            </SidebarAccordion>
          );
        }

        return (
          <Link
            key={index}
            to={`${item.name === "Dashboard" ? "/dashboard" : item.toLink}`}
            className={`${classes.link} ${
              path === "/dashboard/" + item.name.toLowerCase() ||
              path === "/" + item.name.toLowerCase()
                ? classes.active_link
                : ""
            }`}
          >
            <item.icon className={classes.link_icon} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default SidebarList;
