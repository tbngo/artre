import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: "10px",
    ...theme.typography.button,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box>
        <Container maxWidth="md">
          <Grid container spacing={5}>
            <Grid item xs={4} sm={4}>
              <Box>
                <Typography className={classes.header}>ABOUT</Typography>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About us
                </Link>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Box>
                <Typography className={classes.header}>ABOUT</Typography>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About us
                </Link>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Box>
                <Typography className={classes.header}>ABOUT</Typography>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About us
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box paddingTop="25px">Artre &copy; {new Date().getFullYear()}</Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
