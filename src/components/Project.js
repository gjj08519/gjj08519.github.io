import { Box,Grid  } from '@mui/material'
import React, {useEffect, useState } from "react";
import ProjectCard from './ProjectCard';
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import Center from './Center';
import inventoryTracker from "../../src/images/inventoryTracker.jpg"
import MainCard from "./MainCard"
export default function Project() {
    
    const[projects ,setProjects]=useState([])
    let projectlist = [
        {
            image:"./inventoryTracker.jpg",
            title:"Inventory Tracker",
            technique:"C#,WPF",
            discription:"Inventory Tracker is a simple C# WPF application that allows groceries to track available stock of items in their stores. Such as: add all available items; update items; remove items. Provides a report that shows all items with details. In addition, provide a shopping list report for items that are not available in minimum quantities"
            
        },
        {
            image:"./database.jpg",
            title:"Database Project",
            technique:"SQL",
            discription:"Database Project on buying products on website, using knowledge of Conceptual Design, Physical Design, writing SQL statements, Database Users,Roles, and Permissions, creating views and writing triggers"
            
        },
        {
            image:"./pizza.jpg",
            title:"Pizza Website",
            technique:"C#,ASP.NET CORE",
            discription:"Project of pizza restaurant website, use C#, ASP.NET MVC, ASP.NET Core Identity, Entity Framework, SQL Server, Json, jQuery, Bootstrap, HTML, CSS, JavaScript, Razor, Microsoft Azure DevOps, external APIs (Google Maps, SendGrid), version control tools GitHub to make a real website."
            
        },
        {
            image:"./iot.jpg",
            title:"Container Farm",
            technique:"C#,ASP.NET CORE,IoT,Azure,Xamarin",
            discription:"Project is to help JAC Farms design and implement a new IoT product for their container farm. In this project, we use reTerminal as the computing device, python as the on-device programming language, Microsoft Azure as the cloud infrastructure and IoT gateway and .NET and Xamarin for developing a user interface application."
            
        },
    ];
    
    useEffect(()=>{
        setProjects(projectlist)
      },[])
       
     
    return (
        <Center>
            <Box sx={{
                m: 5,
                display: 'flex',
                flexDirection: 'column',
                alignitems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
               
                display: 'flex',
                
                alignitems: 'center',
                justifyContent: 'start'
            }}>
                <Typography variant="h4">Projects I did:</Typography> 
                </Box>
                <Box sx=
                    {{
                        width: '60%',
                        m: 'auto',
                        pt: 5,
                        
                    }}>


                    <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        {projects.map((item, index) => (

                            <Grid item key={index} xs={6}>
                                <ProjectCard key={index} image={item.image} title={item.title} technique={item.technique} discription={item.discription}></ProjectCard>
                            </Grid>
                        ))}
                        

                    </Grid>

                </Box> 
                
            </Box>

        </Center >



    )
}
