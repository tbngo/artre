import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "space-between",
  },
  toolbarTitle: {
    align: "center",
    color: "inherit",
    textDecoration: "none",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button variant="text" size="small">
            Discover
          </Button>
          <Typography
            component={Link}
            to={"/"}
            className={classes.toolbarTitle}
          >
            ARTRE
          </Typography>
          <Button variant="text" size="small">
            Sign up
          </Button>
        </Toolbar>
      </Container>
    </header>
  );
};

export default Header;
