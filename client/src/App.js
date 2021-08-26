import React from "react";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";

const mainFeaturedPost = {
  title: "The struggling artist is no more",
  description:
    "Submit concepts you would like to see from your favorite artists. We've got it from there.",
  image:
    "https://images.unsplash.com/photo-1556005693-00fff02f134c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib",
  imgText: "main image description",
  linkText: "Read about our mission",
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
      <FeaturedPost post={mainFeaturedPost} />
    </React.Fragment>
  );
}

export default App;
