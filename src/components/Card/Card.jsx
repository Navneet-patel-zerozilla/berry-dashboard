import { ClassNames } from "@emotion/react";
import React from "react";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CallMadeIcon from "@mui/icons-material/CallMade";
import classes from "./card.module.css";

const Card = ({
  title = "$500.00",
  text = "Total Earning",
  backgroundColor = "",
}) => {
  return (
    <div className={classes.card} style={{ backgroundColor: backgroundColor }}>
      <div className={classes.card_body}>
        <div className={classes.card_icons}>
          <div className={classes.card_icon}>
            <FolderOffIcon />
          </div>
          <div className={classes.card_icon}>
            <ViewHeadlineIcon />
          </div>
        </div>
        <div className={classes.card_contents}>
          <div>
            <h5 className={classes.card_title}>{title}</h5>
            <p className={classes.card_text}>{text}</p>
          </div>
          <div className={classes.title_icon}>
            <CallMadeIcon
              style={{
                fontSize: "12px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
