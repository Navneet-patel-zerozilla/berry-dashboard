import { Divider, Grid, Paper } from "@mui/material";
import React from "react";
import classes from "../../pages/Create Invoice/create_invoice.module.css";

const Summary = ({ total = 0, taxRate = 0, discountRate = 0 }) => {
  const tax = (taxRate / 100) * total;
  const discount = (discountRate / 100) * total;
  const finalTotal = total + tax - discount;

  return (
    <Grid container className={classes.invoice_summary}>
      <Grid item xs={12} md={4} textAlign="right">
        <Paper className={classes.invoice_summary_paper}>
          <Grid container spacing={2}>
            <Grid item xs={6} textAlign="right" fontWeight={500}>
              <p>Sub Total :</p>
            </Grid>
            <Grid item xs={6}>
              <p>${total}</p>
            </Grid>
            <Grid item xs={6} textAlign="right" fontWeight={500}>
              <p>{`Taxes (${taxRate}%) :`}</p>
            </Grid>
            <Grid item xs={6}>
              <p>${tax}</p>
            </Grid>
            <Grid item xs={6} textAlign="right" fontWeight={500}>
              <p>{`Taxes (${discountRate}%) :`}</p>
            </Grid>
            <Grid item xs={6}>
              <p>${discount}</p>
            </Grid>
          </Grid>
          <Divider style={{ width: "100%" }} />
          <Grid container spacing={2} className={classes.summary_total}>
            <Grid item xs={6} textAlign="right">
              <p>Total :</p>
            </Grid>
            <Grid item xs={6}>
              <p>${finalTotal}</p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Summary;
