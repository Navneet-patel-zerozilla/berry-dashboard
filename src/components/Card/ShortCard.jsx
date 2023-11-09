import { ClassNames } from "@emotion/react";
import React from "react";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import classes from "./shortcard.module.css";

const SleekCard = ({
  title = "$500.00",
  text = "Total Earning",
  backgroundColor = "",
}) => {
  return (
    <div className={classes.card} style={{ backgroundColor: backgroundColor }}>
      <div className={classes.card_body}>
        <div className={classes.card_icon}>
          <FolderOffIcon />
        </div>
        <div className={classes.card_contents}>
          <h5 className={classes.card_title}>{title}</h5>
          <p className={classes.card_text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SleekCard;
