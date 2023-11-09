import React, { useState } from "react";
import classes from "./navbar.module.css";
import Logo from "/src/assets/login_logo.svg";
import Profile from "/src/assets/profile.avif";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SensorsIcon from "@mui/icons-material/Sensors";
import SettingsIcon from "@mui/icons-material/Settings";
import { FormControl } from "@mui/base";
import { InputAdornment, OutlinedInput } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Navbar = ({ toggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileIconHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_search_logo_container}>
        <div className={classes.logo}>
          <img src={Logo} alt="navbar logo" />
        </div>
        <div className={classes.menu_search_container}>
          <div
            className={classes.menu}
            onClick={() => {
              toggleSidebar();
            }}
          >
            <MenuIcon />
          </div>
          <div className={`${classes.menu} ${classes.search_mobile}`}>
            <SearchIcon />
          </div>
          <div className={classes.search}>
            <FormControl variant="outlined">
              <OutlinedInput
                style={{ borderRadius: "8px" }}
                id="outlined-adornment-search"
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <div className={classes.tune_icon}>
                      <TuneIcon />
                    </div>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className={classes.action_icons_container}>
        <div className={classes.action_icons}>
          <div className={`${classes.mobile_menu}`} onClick={mobileIconHandler}>
            <MoreVertIcon />
          </div>
          <div
            className={`${classes.all_menu} ${menuOpen ? classes.open : ""}`}
          >
            <div className={classes.action_icon}>
              <SensorsIcon />
            </div>
            <div
              className={`${classes.action_icon} ${classes.action_icon_translate}`}
            >
              <TranslateIcon />
            </div>
            <div className={classes.action_icon}>
              <NotificationsNoneIcon />
            </div>
          </div>

          <div className={classes.profile}>
            <img src={Profile} alt="profile" />
            <SettingsIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
