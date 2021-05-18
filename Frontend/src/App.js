import "./App.css";
import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./style";

function App() {
  const classes = useStyles();

  return (
    <Container maxidth="lg">
      <AppBar classes={classes.appBar} position="static" color="inherint">
        <Typography className={classes.heading} variant="h2" align="center">
          Garden App
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1571192776145-9f563c1df686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            alt="garden"
            height="60"
          />
          <Grow in>
            <Container>
              <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={7}>
                  <Posts />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Typography>
      </AppBar>
    </Container>
  );
}
export default App;
