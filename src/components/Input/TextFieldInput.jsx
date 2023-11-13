import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useId } from "react";

const TextFieldInput = ({
  type = "text",
  label,
  placeholder = "",
  name = "",
  value = "",
  onInputChange,
  error,
  onBlur,
  disabled = false,
}) => {
  const id = useId();

  return (
    <FormControl variant="outlined" style={{ width: "100%" }}>
      <label id={id} style={{ marginBottom: "10px" }}>
        {label}
      </label>
      <OutlinedInput
        id={id}
        aria-describedby="outlined-weight-helper-text"
        placeholder={placeholder}
        type={type}
        size="small"
        style={{
          backgroundColor: "rgb(248, 250, 252)",
        }}
        name={name}
        value={value}
        onChange={onInputChange}
        onBlur={onBlur}
        disabled={disabled}
      />

      {error && (
        <FormHelperText error id="component-error-text">
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextFieldInput;
