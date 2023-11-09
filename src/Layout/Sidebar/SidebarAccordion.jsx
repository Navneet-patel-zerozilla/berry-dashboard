import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import classes from "./sidebarlist.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const SidebarAccordion = ({ heading, items, children, depth = 1 }) => {
  return (
    <Accordion
      className={classes.accordion}
      sx={{
        "&:before": {
          display: "none",
        },
      }}
      disableGutters={true}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordion_summary}
      >
        <Typography>
          {children}
          <span>{heading}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordion_details}>
        <>
          {depth === 1 && <div className={classes.line}></div>}
          {items.map((item, index) => {
            if (item.accordion) {
              return (
                <SidebarAccordion
                  key={index}
                  heading={item.name}
                  items={item.accordionItems}
                  depth={2}
                >
                  <div className={classes.accordion_items_dot}>
                    <FiberManualRecordIcon />
                  </div>
                </SidebarAccordion>
              );
            }
            return (
              <Link key={index} to={item.toLink} className={classes.link}>
                <div className={classes.accordion_items_dot}>
                  <FiberManualRecordIcon />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </>
      </AccordionDetails>
    </Accordion>
  );
};

export default SidebarAccordion;
