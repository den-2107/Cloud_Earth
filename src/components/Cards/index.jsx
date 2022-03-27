import React from "react";
import Card_one from "../Card_one";
//import { Grid } from "@mui/material";

import s from "./index.modules.css";

const Cards = ({ data }) => {
  return (
    <div className={s.cards}>
      {data.map((item) => (
        <Card_one key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cards;
