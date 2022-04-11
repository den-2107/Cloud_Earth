import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer"

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
// api.getAllpost().then(data => setPosts(data))
const [posts, setPosts ] = useState([ ]);
useEffect( ()=> api.getAllpost().then(data => setPosts(data)), [ ])
  return (
    <>
      <Header />
      <Cards data={posts} />
      <Footer />
    </>
  );
};

export default App;
