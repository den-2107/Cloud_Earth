import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer"
import { postData } from "./posts.js";
const App = () => {
  return (
    <>
      <Header />
      <Cards data={postData} />
      <Footer />
    </>
  );
};

export default App;
