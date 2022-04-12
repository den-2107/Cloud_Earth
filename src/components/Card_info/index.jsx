import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  Collapse,
  Avatar,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import Button from '@mui/material/Button';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
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
  changeFormText
}) => {
  const [opened, setOpened] = useState(false);

  const deletePost = (e) => {
    api.deletePost(_id);
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
    })

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
            <div style={{ diplay: "flex", flexDirection: "column", fontSize: "15px", textShadow: "6px 3px 10px rgba(150, 150, 150, 1)"}}>
              <div>
                {moment(created_at).locale("ru").format("LL")}
              </div>
              <div>{moment(updated_at).locale("ru").startOf("hour").fromNow()}</div>
            </div>
          }
        />
        <CardContent className={s.cardcontent}>
        <Grid container wrap="wrap" spacing={1}>
              <Grid item xs zeroMinWidth>
                <Typography  Wrap>{text}</Typography>
                <p>
                  id - {_id}
                </p>
              </Grid>
            </Grid>
          <Typography variant="h5">{title}</Typography>
          <Box sx={{ flexGrow: 1, overflow: "hidden", px: 2 }}>
          </Box>
        </CardContent>
        <CardActions disableSpacings className={s.actions}> 
          <IconButton onClick={setLike}>
            
            <FavoriteIcon className={currentLike ? s.isLiked : null}/> 
            {currentLikesCount}
          </IconButton>     
            <button className={s.button}
            onClick={deletePost} >
                Удалить пост
            </button>
            <button className={s.button} onClick={updateClick}>  
                Редактировать пост
            </button>
        </CardActions>
        <Collapse in={opened} className={s.color}>
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Collapse>
      </div>
      </Grid>
  );
};
export default Card_info;
