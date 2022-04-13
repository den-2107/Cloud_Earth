import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer"
import Form from "./components/Form"

// import { postData } from "/posts.js";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Cards data={postData} />
//       <Footer />
//     </>
//   );
// };

// export default App;




import api from "./api"

const App = () => {
  console.log("App")
  
// api.getAllpost().then(data => setPosts(data))
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
      />
      <Cards
        data={posts} 
        setFormParams={setFormParams}
        changeFormTitle={changeFormTitle}
        changeFormText={changeFormText}
        setPost={setPosts}
      />
      <Footer />
    </>
  );
};

export default App;
