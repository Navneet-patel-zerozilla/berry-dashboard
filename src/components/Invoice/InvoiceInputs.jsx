import { Divider, FormControl, Grid, MenuItem, Select } from "@mui/material";
import React, { useState, useId } from "react";
import TextFieldInput from "../Input/TextFieldInput";
import classes from "../../pages/Create Invoice/create_invoice.module.css";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const InvoiceInputs = () => {
  const id = useId();

  const [invoiceDetails, setInvoiceDetails] = useState({
    "Invoice Number": "",
    "Customer Name": "",
    "Customer Email": "",
    "Customer Contact Number": "",
    "Customer Address": "",
    Status: "Pending",
  });

  const [inputError, setInputError] = useState({});

  const onInputChange = (e) => {
    setInvoiceDetails({
      ...invoiceDetails,
      [e.target.name]: e.target.value,
    });
    setInputError((prevInputError) => ({
      ...prevInputError,
      [e.target.name]: "",
    }));
  };

  const inputBlurHandler = (e) => {
    const errorMessage =
      invoiceDetails[e.target.name].length === 0
        ? `${e.target.name} Field is required`
        : "";

    setInputError((prevInputError) => ({
      ...prevInputError,
      [e.target.name]: errorMessage,
    }));
  };

  const data = ["Pending", "Refund", "Paid"];

  const [date, setDate] = useState(dayjs());

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextFieldInput
            placeholder="Invoice #"
            label="Invoice Number *"
            name="Invoice Number"
            onInputChange={onInputChange}
            onBlur={inputBlurHandler}
            error={inputError["Invoice Number"]}
          />
        </Grid>
      </Grid>
      <Divider style={{ width: "100%" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextFieldInput
            placeholder="Navneet P."
            label="Customer Name *"
            name="Customer Name"
            onInputChange={onInputChange}
            onBlur={inputBlurHandler}
            error={inputError["Customer Name"]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFieldInput
            placeholder="email@example.com"
            label="Customer Email *"
            type="email"
            name="Customer Email"
            onInputChange={onInputChange}
            onBlur={inputBlurHandler}
            error={inputError["Customer Email"]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFieldInput
            placeholder="+91 9999999999"
            label="Customer Contact Number *"
            name="Customer Contact Number"
            onInputChange={onInputChange}
            onBlur={inputBlurHandler}
            error={inputError["Customer Contact Number"]}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextFieldInput
            placeholder="Enter Address."
            label="Customer Address *"
            name="Customer Address"
            onInputChange={onInputChange}
            onBlur={inputBlurHandler}
            error={inputError["Customer Address"]}
          />
        </Grid>
      </Grid>
      <Divider style={{ width: "100%" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl style={{ width: "100%", marginBottom: "10px" }}>
            <label id={id}>Invoice Date *</label>
            <DatePicker
              onChange={(newValue) => setDate(newValue.$d)}
              value={date}
              className={classes.date_picker}
              slotProps={{ textField: { size: "small" } }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl style={{ width: "100%", marginBottom: "10px" }}>
            <label id={id}>Status *</label>
            <Select
              size="small"
              style={{
                backgroundColor: "rgb(248, 250, 252)",
                width: "100%",
              }}
              inputProps={{ "aria-label": "Without label" }}
              name="Status"
              onChange={onInputChange}
              value={invoiceDetails.Status}
            >
              {data.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default InvoiceInputs;
