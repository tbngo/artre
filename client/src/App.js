import Header from "./components/Header";
import { Container, CssBaseline } from "@material-ui/core";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sz="large">
        <Header />
      </Container>
    </React.Fragment>
  );
}

export default App;
