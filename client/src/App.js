import React from "react";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import Header from "./components/Header";
import Card from "./components/Card";
import FeaturedPost from "./components/FeaturedPost";

const mainFeaturedPost = {
  title: "The struggling artist is no more",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
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
