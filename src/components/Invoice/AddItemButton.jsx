import { Button, Grid } from "@mui/material";
import React from "react";

const AddItemButton = ({ addItemActiveHandler }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          variant="text"
          onClick={() => {
            addItemActiveHandler(true);
          }}
        >
          + Add Item
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddItemButton;
