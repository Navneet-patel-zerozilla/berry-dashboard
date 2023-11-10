import React, { useState } from "react";
import classes from "../../pages/Create Invoice/create_invoice.module.css";
import { Button, Grid } from "@mui/material";
import TextFieldInput from "../Input/TextFieldInput";

const AddProduct = ({ addItemActiveHandler, addRowsHandler }) => {
  const options = [
    ["Product 1", "Rate : 260"],
    ["Product 2", "Rate : 160"],
    ["Product 3", "Rate : 360"],
  ];

  const [product, setProduct] = useState({
    product: [],
    quantity: 0,
  });

  const inputHandler = (e) => {
    setProduct((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(product.product);

  const addButtonDisabled = product.product.length === 0 || !product.quantity;

  return (
    <Grid container spacing={2} className={classes.button_invoice}>
      <Grid item xs={12} md={4}>
        <TextFieldInput
          placeholder="Select Product"
          label="Product Name"
          variant="select"
          data={options}
          inputHandler={inputHandler}
          name="product"
          value={product.product}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextFieldInput
          inputHandler={inputHandler}
          placeholder="1"
          label="Quantity"
          type="number"
          name="quantity"
          value={product.quantity}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextFieldInput
          placeholder="0"
          label="Amount"
          variant="disabled"
          value={product.product[1]?.split(":")[1] * product.quantity || 0}
        />
      </Grid>
      <Grid item>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Button
              variant="text"
              color="error"
              onClick={() => {
                addItemActiveHandler(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={() => {
                addRowsHandler(product);
                addItemActiveHandler(false);
              }}
              disabled={addButtonDisabled}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
