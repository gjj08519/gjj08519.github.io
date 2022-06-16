import { Box, AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import React ,{useEffect, useState }from 'react'
import { Outlet, useNavigate } from 'react-router'
import HomeIcon from '@mui/icons-material/Home';
import CircleIcon from '@mui/icons-material/Circle';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useStateContext from '../hooks/useStateContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArticleIcon from '@mui/icons-material/Article';
import me from "../../src/images/me.png"
import Avatar from '@mui/material/Avatar';

export default function Header() {
    const {resetContext } = useStateContext()
    const {context, setContext} = useStateContext()
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0);
    const logout = () => {
        resetContext();
        navigate("/");
    }
    const[user,setUser]=React.useState(context.username)
    
    const ToProject = () => {
        console.log(22);
        navigate("/Project");
        console.log(33);
      }
    const [AuthOpen, setAuthOpen] = useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <AppBar position="sticky" >
                <Toolbar sx={{ width: 'auto', minWidth: 300, m: '1' }}>
                    <Box sx={{
                        m: '1',
                        width: 50,

                        display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }
                    }}>
                        <MenuIcon />
                    </Box>
                    <Box
                        sx={{
                            width: 100,
                        }}
                    >

                        <Box sx={{ color: '#ff7961', fontSize: 46, fontWeight: 'medium', md: 0 }}>
                        <Avatar alt="me" src={me}  />
                        </Box>
                        

                    </Box>
                    <Box>
                        <Paper
                            component="form"
                            sx={{ ml: 4, p: '2px 8px', display: 'flex', alignItems: 'center', width: 300 }}
                        >
                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Messages"
                                inputProps={{ 'aria-label': 'Messages' }}
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="Message">
                                <MessageIcon />
                            </IconButton>

                        </Paper>
                    </Box>
                    <Box sx={{
                        m: 'auto',
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
                        
                    }}>

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="nav"

                        >
                            <Tab sx={{fontSize:20}} icon={<HomeIcon />} iconPosition="start" label="Home" onClick={()=>{navigate("/");}}/>
                            <Tab sx={{fontSize:20}} icon={<ArticleIcon />} iconPosition="start" label="Project" onClick={()=>{navigate("/Project");}} />
                            <Tab sx={{fontSize:20}} icon={<FavoriteIcon />} iconPosition="start" label="Love" onClick={()=>{navigate("/Love");}} />
                            
                        </Tabs>

                    </Box>
                    
                   
                    <Box sx={{
                        m: 'auto',

                        display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }
                    }}>
                        <IconButton aria-label="logout" onClick={logout}>
                            <AccountCircleRoundedIcon />
                        </IconButton>
                        <IconButton aria-label="start">
                        <PlayArrowIcon />
                        </IconButton>

                        
                    </Box>
                </Toolbar>

            </AppBar>

        </>
    )
}