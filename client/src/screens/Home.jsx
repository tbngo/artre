import React from "react";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import Header from "../components/Header";
import FeaturedPost from "../components/FeaturedPost";
import Footer from "../components/Footer";

const mainFeaturedPost = {
  title: "The struggling artist is no more",
  description:
    "Submit concepts you would like to see from your favorite artists. We've got it from there.",
  image:
    "https://images.unsplash.com/photo-1556005693-00fff02f134c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib",
  imgText: "main image description",
  linkText: "Read about our mission",
};

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
      <FeaturedPost post={mainFeaturedPost} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
