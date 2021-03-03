import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="center">
          <h1>Expense Tracker</h1>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
