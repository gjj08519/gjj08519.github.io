import { Box,  } from '@mui/material'

import React, {useEffect, useState } from "react";
import Typography from '@mui/material/Typography';


import {useNavigate } from 'react-router'

import Center from './Center';
import Project from "./Project"
import MainCard from "./MainCard"
export default function Overview() {

    const navigate = useNavigate()
     const [mainimage, setImage]=useState("")
     const [title, setTitle]=useState("")
     const [discribtion, setDiscribtion]=useState("")
     const image="./image1.jpg"
     const titleInit="About Me"
     const discribtioninit=" My name is Jianjuan Gao.I live in Canada for several years. After obtained an MBA.I realized that I was very strong in math, and decided to change careers completely.During the three -year programming in Computer Science at John Abbott College,I really dig into software development, and I will never regret for following this field. I am a happy programmer!"
    
     useEffect(()=>{
      setImage(image)
      setTitle(titleInit)
      setDiscribtion(discribtioninit)
    },[])
     
    const ToProject = () => {
      console.log(22)
      navigate("/Project")
      console.log(33)
    }


    return (
        <Center>
            <Box sx={{
                m: 5,
                display: 'flex',
                flexDirection: 'column',
                alignitems: 'center',
                justifyContent: 'space-between'
            }}>
               
<MainCard mainimage={mainimage} title={title} discribtion={discribtion} onClick={ToProject} ></MainCard>
            </Box>
            <Box sx={{
              
               display: 'flex',
               
               alignitems: 'center',
               justifyContent: 'space-between'
           }}>
               <Typography variant="h4">This website is done by myself using react. It's good fun!</Typography> 
               </Box>
        </Center >



    )
}
