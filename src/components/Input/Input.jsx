import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React, { useId } from "react";

const CustomInput = ({ type, label }) => {
  const id = useId();

  return (
    <FormControl variant="outlined" style={{ width: "100%" }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput id={id} type={type} label={label} />
    </FormControl>
  );
};

export default CustomInput;
