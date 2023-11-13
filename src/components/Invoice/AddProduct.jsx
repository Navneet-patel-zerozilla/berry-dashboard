import React, { useState, useId } from "react";
import classes from "../../pages/Create Invoice/create_invoice.module.css";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import TextFieldInput from "../Input/TextFieldInput";

const AddProduct = ({ addItemActiveHandler, addRowsHandler }) => {
  const id = useId();

  const options = [
    {
      title: "Product 1",
      subTitle: "Rate : 160",
    },
    {
      title: "Product 2",
      subTitle: "Rate : 260",
    },
    {
      title: "Product 3",
      subTitle: "Rate : 360",
    },
  ];

  const [product, setProduct] = useState({
    product: null,
    quantity: 0,
  });

  const [quantityError, setQuantityError] = useState({
    flag: false,
    message: "",
  });

  const productsHandler = (e) => {
    setProduct({
      product: e.target.value,
      quantity: 1,
    });
  };

  const quantityHandler = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: Number(e.target.value),
    }));

    if (Number(e.target.value) < 0) {
      setQuantityError({
        flag: true,
        message: "Quantity cannot be negative",
      });
    } else if (Number(e.target.value) === 0) {
      setQuantityError({
        flag: true,
        message: "Quantity cannot be 0",
      });
    } else {
      setQuantityError({
        flag: false,
        message: "",
      });
    }
  };

  const disabledPriceInput =
    product.quantity < 0
      ? 0
      : product.quantity * product?.product?.subTitle?.split(":")[1] || 0;

  const addButtonDisabled = !product.product || product.quantity <= 0;

  return (
    <Grid container spacing={2} className={classes.button_invoice}>
      <Grid item xs={12} md={4}>
        <FormControl style={{ width: "100%" }}>
          <label id={id} style={{ marginBottom: "10px" }}>
            Product Name
          </label>
          <Select
            displayEmpty
            value=""
            onChange={productsHandler}
            name="Products"
            inputProps={{ "aria-label": "Without label" }}
            size="small"
          >
            <MenuItem disabled value="">
              <em>Select Product</em>
            </MenuItem>
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {option.title}
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    {option.subTitle}
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextFieldInput
          onInputChange={quantityHandler}
          placeholder="1"
          label="Quantity"
          type="number"
          name="quantity"
          value={product.quantity}
          disabled={!product.product}
        />
        {quantityError.flag && (
          <FormHelperText error id="component-error-text">
            {quantityError.message}
          </FormHelperText>
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        <TextFieldInput label="Amount" disabled value={disabledPriceInput} />
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
