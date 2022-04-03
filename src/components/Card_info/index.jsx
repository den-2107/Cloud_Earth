import React, { useState } from "react";
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

const Card_info = ({
  title,
  text,
  author: { name, email, avatar },
  created_at,
  updated_at,
}) => {
  const [opened, setOpened] = useState(false);

  const ExpandMore = styled((props) => {
    const { opened, ...other } = props;
    return <IconButton {...other} />;
  })(({ opened }) => ({
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  }));

  const onClick = () => setOpened(!opened);

  return (
  <Grid className={s.box}>
    <Card className={s.card}>
      <CardHeader className={s.cardheader}
          avatar={<Avatar alt={name} src={avatar} variant="rounded" />}
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
          <Typography variant="h5">{title}</Typography>
          <Box sx={{ flexGrow: 1, overflow: "hidden", px: 2 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{text}</Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CardActions disableSpacings className={s.actions}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
            <Button variant="outlined" size="small">
              <p className={s.text}>
                 Редактировать пост
              </p>
            </Button>
        </CardActions>
        <Collapse in={opened} className={s.color}>
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
  );
};
export default Card_info;
