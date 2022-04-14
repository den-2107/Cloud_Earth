import React, { useState, useEffect } from "react";
import {
  Grid,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import s from "./index.modules.css";
import { Typography } from "@mui/material";
import  api  from "../../api";

const Card_info = ({
  _id,
  title,
  text,
  author: { name, email, avatar },
  created_at,
  updated_at,
  likesCount,
  isLiked,
  setFormParams,
  changeFormTitle,
  changeFormText,
  setPosts
}) => {
  console.log("Card_info")

  const deletePost = (e) => {
    api.deletePost(_id);
    api.getAllpost().then(data => setPosts(data))
  };

  const updateClick = () => {
    setFormParams({
      isVisible: true,
      method: "PATCH",
      initParams: {
        id: _id,
        title: title,
        text: text,
        image: "",
        tags: []
      }
    });

    changeFormTitle(title)
    changeFormText(text)
  }

  const [ currentLike, changeLike ] = useState(isLiked);
  const [ currentLikesCount, changeLikesCount ] = useState(likesCount);

  const setLike = (e) => {
    let promise;

    if (currentLike) {
      promise = api.deleteLike(_id)
    }
    else {
      promise = api.setLike(_id);
    }

    changeLike(!currentLike); 

    promise.then((response) => changeLikesCount(response.likes.length));
  };

  return (
  <Grid className={s.box}>
    <div className={s.card}>
      <CardHeader className={s.cardheader}   
          avatar={<Avatar alt={name} src={avatar} />}
          title={email}
          subheader={
            <div style={{diplay: "flex", flexDirection: "column", fontSize: "15px", textShadow: "6px 3px 10px rgba(150, 150, 150, 1)"}}>
              <div>
                {moment(created_at).locale("ru").format("LL")}
              </div>
              <div>{moment(updated_at).locale("ru").startOf("hour").fromNow()}</div>
            </div>
          }
        />
        <Typography 
          variant="h5" 
          align="center"
          px={2}
          fontWeight="bold"
        >
          {title}
        </Typography>
        <CardContent sx={{padding: "0"}}>
          <Grid 
            container 
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
              <Typography 
                sx={{
                    overflow: "scroll", 
                    height: "100px", 
                    width: "calc(100% - 32px)", 
                    wrap: "wrap",
                    overflowX: "hidden",
                    overflowY: "auto"
                  }} 
                px={2}
              >
                  {text}
              </Typography>
              <Typography>id - {_id}</Typography>
          </Grid>
        </CardContent>
        <CardActions disableSpacings className={s.actions}> 
          <IconButton onClick={setLike}>            
            <FavoriteIcon className={currentLike ? s.isLiked : null}/> 
            {currentLikesCount}
          </IconButton>     
          <button 
            className={s.button}
            onClick={deletePost}
          >
              Удалить пост
          </button>
          <button className={s.button} onClick={updateClick}>  
              Редактировать пост
          </button>
        </CardActions>
      </div>
      </Grid>
  );
};
export default Card_info;
