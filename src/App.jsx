import React, { useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer"
import api from "./Api";
import { postData } from "./posts.js";
import { SettingsSuggestRounded } from "@mui/icons-material";


// const App = () => {
//   return (
//     <>
//       <Header />
//       <Cards data={postData} />
//       <Footer />
//     </>
//   );
// };

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo()]).then(
      ([user]) => {
        setUser(user);
      }
    );
  }, []);

  return (
    <>
      <Header />
        <Cards user={user} />
          <Footer />
    </>
  );
};

export default App;
