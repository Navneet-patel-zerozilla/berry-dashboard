import React, { useState } from "react";
import classes from "./create_invoice.module.css";
import GlobalDashboardLayout from "../../Layout/GlobalDashboardLayout";
import TextFieldInput from "../../components/Input/TextFieldInput";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import Summary from "../../components/Invoice/Summary";
import AddProduct from "../../components/Invoice/AddProduct";
import AddItemButton from "../../components/Invoice/AddItemButton";
import ProductTable from "../../components/Invoice/ProductTable";
import InvoiceInputs from "../../components/Invoice/InvoiceInputs";

const CreateInvoice = () => {
  const [rows, setRows] = useState([
    createData(
      Math.random(),
      { title: "Title 1", subTitle: "Sub title" },
      7,
      200
    ),
    createData(
      Math.random(),
      { title: "Title 2", subTitle: "Sub title" },
      7,
      200
    ),
    createData(
      Math.random(),
      { title: "Title 3", subTitle: "Sub title" },
      7,
      200
    ),
    createData(
      Math.random(),
      { title: "Title 4", subTitle: "Sub title" },
      7,
      200
    ),
    createData(
      Math.random(),
      { title: "Title 5", subTitle: "Sub title" },
      7,
      200
    ),
  ]);

  const [addInvoiceClicked, setAddInvoiceClicked] = useState(false);

  const [addItemActive, setAddItemActive] = useState(false);

  const removeProductHandler = (id) => {
    setRows(
      rows.filter((row) => {
        return row.id !== id;
      })
    );
  };

  function createData(id, description, quantity, amount) {
    return {
      id: id,
      totalCount: quantity * amount,
      Description: (
        <div className={classes.invoice_description}>
          <span>{description.title}</span>
          <span>{description.subTitle}</span>
        </div>
      ),
      Quantity: <p>{quantity}</p>,
      Amount: <p>{amount}</p>,
      Total: <p>{quantity * amount}</p>,
      Button: (
        <Tooltip title="Delete">
          <IconButton
            color="error"
            onClick={() => {
              removeProductHandler(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ),
    };
  }

  const addItemActiveHandler = (flag) => {
    setAddItemActive(flag);
  };

  let summarySubTotalCalc = 0;
  rows.forEach((row) => {
    summarySubTotalCalc = summarySubTotalCalc + row.totalCount;
  });

  const addRowsHandler = (data) => {
    const productName = data.product.title;
    const price = data.product.subTitle.split(":")[1];
    const quantity = data.quantity;

    setRows((prevState) => [
      ...prevState,
      createData(
        Math.random(),
        {
          title: productName,
          subTitle: "This is Subtitle",
        },
        quantity,
        price
      ),
    ]);
  };

  const getAllInputData = (inputsData) => {
    console.log(inputsData);
  };

  const addInvoiceHandler = () => {
    setAddInvoiceClicked(true);
  };

  const reverseClick = () => {
    setAddInvoiceClicked(false);
  };

  const [open, setOpen] = useState(false);
  const showModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <GlobalDashboardLayout>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText color="purple">
            Invoice created successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%" }}>
          <div className={classes.invoice_heading}>
            <h1>Create Invoice</h1>
          </div>
          <Divider style={{ width: "100%" }} />
          <div className={classes.container}>
            <InvoiceInputs
              addInvoiceClicked={addInvoiceClicked}
              getAllInputData={getAllInputData}
              reverseClick={reverseClick}
              showModal={showModal}
            />
            <Divider style={{ width: "100%" }} />
            <ProductTable rows={rows} />
            {addItemActive ? (
              <AddProduct
                addItemActiveHandler={addItemActiveHandler}
                addRowsHandler={addRowsHandler}
              />
            ) : (
              <AddItemButton addItemActiveHandler={addItemActiveHandler} />
            )}
            <Divider style={{ width: "100%" }} />
            <Summary
              total={summarySubTotalCalc}
              taxRate={10}
              discountRate={5}
            />
            <Divider style={{ width: "100%" }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextFieldInput
                  label="Terms and Condition: *"
                  value="I acknowledge terms and conditions."
                  placeholder="Enter Address"
                />
              </Grid>
            </Grid>
            <Divider style={{ width: "100%" }} />
            <Grid container spacing={2} className={classes.button_invoice}>
              <Grid item xs={12} textAlign="right">
                <Button variant="contained" onClick={addInvoiceHandler}>
                  Add Invoice
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Box>
    </GlobalDashboardLayout>
  );
};

export default CreateInvoice;
