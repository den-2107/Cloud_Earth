import React , { useState, useEffect } from "react";
import Card_info from "../Card_info";
//import { Grid } from "@mui/material";

import s from "./index.modules.css";
import api from "../../api";

const Cards = ({ data }) => {
  const [me, getMe ] = useState([ ]);
  useEffect(()=> api.getMe().then(data => getMe(data)._id), []);
  console.log(data[0])
  console.log(me)

  return (
    <div className={s.cards}>
      {data.map((item) => (
        <Card_info key={item.id} {...item} likesCount={item.likes.length} 
        isLiked={item.likes.includes(me._id)}/>
      ))}
    </div>
  );
};

export default Cards;
