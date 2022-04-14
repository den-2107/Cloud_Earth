import React , { useState, useEffect } from "react";
import Card_info from "../Card_info";

import s from "./index.modules.css";
import api from "../../api";

const Cards = ({
   data, 
   setFormParams,
   changeFormTitle,
   changeFormText,
   setPosts
}) => {
  console.log("Cards")

  const [me, getMe ] = useState([ ]);
  useEffect(()=> api.getMe().then(data => getMe(data)._id), []);

  return (
    <div className={s.cards}>
      {
        data.map((item) =>
          <Card_info 
            key={item.id} {...item} 
            likesCount={item.likes.length} 
            isLiked={item.likes.includes(me._id)}
            setFormParams={setFormParams}
            changeFormTitle={changeFormTitle}
            changeFormText={changeFormText}
            setPosts={setPosts}
          />
        )
      }
    </div>
  );
};

export default Cards;
