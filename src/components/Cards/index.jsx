import React from "react";
import Card_info from "../Card_info";
//import { Grid } from "@mui/material";

import s from "./index.modules.css";

const Cards = ({ data }) => {
  return (
    <div className={s.cards}>
      {data.map((item) => (
        <Card_info key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cards;
