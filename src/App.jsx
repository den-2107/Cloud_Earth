import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer"
import Form from "./components/Form"

import api from "./api"

const App = () => {
  console.log("App")
  
const [posts, setPosts ] = useState([ ]);
useEffect( ()=> api.getAllpost().then(data => setPosts(data)), [ ])

  const [formParams, setFormParams] = useState({
    isVisible: false,
    method: "POST",
    initParams: {
      id: null,
      title: "",
      text: "",
      image: "",
      tags: []
    }
  });

  const [formTitle, changeFormTitle] = useState("");
  const [formText, changeFormText] = useState("");

  return (
    <>
      <Header setFormParams={setFormParams} />
      <Form
        params={formParams} 
        setFormParams={setFormParams}
        title={formTitle}
        changeTitle={changeFormTitle}
        text={formText}
        changeText={changeFormText}
        setPosts={setPosts}
      />
      <Cards
        data={posts} 
        setFormParams={setFormParams}
        changeFormTitle={changeFormTitle}
        changeFormText={changeFormText}
        setPosts={setPosts}
      />
      <Footer />
    </>
  );
};

export default App;
