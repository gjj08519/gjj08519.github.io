import React, {useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import mainImage from "../../src/images/image1.jpg"
import { CardActionArea} from '@mui/material';
import { Outlet, useNavigate } from 'react-router'
import Project from "./Project";

export default function MainCard(props) {
//  const navigate = useNavigate()
//  const [mainimage, setImage]=useState({})
//  const [title, setTitle]=useState("")
//  const [discribtion, setDiscribtion]=useState("")
//  const titleInit="About Me"
//  const discribtioninit=" My name is Jianjuan Gao.I live in Canada for several years. After obtained an MBA.I realized that I was very strong in math, and decided to change careers completely.During the three -year programming in Computer Science at John Abbott College,I really dig into software development, and I will never regret for following this field. I am a happy programmer!"

//  useEffect(()=>{
//   setImage(mainImage)
//   setTitle(titleInit)
//   setDiscribtion(discribtioninit)
// },[])
 
// const ToProject = () => {
//   console.log(22)
//   navigate("/Project")
//   console.log(33)
// }
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardActionArea onClick={props.onClick} >
        <CardMedia
          component="img"
          height="500"
          image={props.mainimage}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                {props.discribtion}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}