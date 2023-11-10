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
  variant = "default",
  className = "",
  data = [],
  disabled,
  inputHandler,
  name = "",
  value = "",
}) => {
  const id = useId();

  return (
    <FormControl variant="outlined" style={{ width: "100%" }}>
      <label id={id} style={{ marginBottom: "10px" }}>
        {label}
      </label>
      {variant === "default" && (
        <OutlinedInput
          id={id}
          aria-describedby="outlined-weight-helper-text"
          placeholder={placeholder}
          type={type}
          size="small"
          style={{
            backgroundColor: "rgb(248, 250, 252)",
          }}
          disabled={disabled}
          onChange={inputHandler}
          name={name}
          defaultValue={value}
        />
      )}
      {variant === "disabled" && (
        <OutlinedInput
          id={id}
          aria-describedby="outlined-weight-helper-text"
          placeholder={placeholder}
          type={type}
          size="small"
          style={{
            backgroundColor: "rgb(248, 250, 252)",
          }}
          disabled={disabled}
          onChange={inputHandler}
          name={name}
          value={value}
        />
      )}
      {/* For error use below */}
      {/* <FormHelperText error id="component-error-text">
        Error
      </FormHelperText> */}
      {variant === "date" && (
        <DatePicker
          onChange={inputHandler}
          className={className}
          slotProps={{ textField: { size: "small" } }}
          name={name}
          // defaultValue={value}
        />
      )}
      {variant === "select" && (
        <Select
          defaultValue={value}
          onChange={inputHandler}
          inputProps={{ "aria-label": "Without label" }}
          size="small"
          style={{
            backgroundColor: "rgb(248, 250, 252)",
          }}
          name={name}
        >
          {data.map((option) => {
            if (!Array.isArray(option)) {
              return (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              );
            }
            return (
              <MenuItem key={option} value={option}>
                <Grid container spacing={2}>
                  {option.map((opt, index) => {
                    return (
                      <Grid
                        key={index}
                        item
                        xs={6}
                        textAlign={index === 1 ? "right" : "left"}
                      >
                        {opt}
                      </Grid>
                    );
                  })}
                </Grid>
              </MenuItem>
            );
          })}
        </Select>
      )}
    </FormControl>
  );
};

export default TextFieldInput;
