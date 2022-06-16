import * as React from 'react';
import { Box, AppBar } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Toolbar } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
export default function Footer() {

    const [value, setValue] = React.useState(0);
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} >
            <Toolbar sx={{ width: 'auto', minWidth: 300, m: '1' }}>


                <Box
                    sx={{
                        ml: 2,
                        mt: 0,
                        fontSize: 11,
                        color: 'text.primary',
                       
                    }}
                >
                     <Typography variant="h6">Contact:  </Typography> 

                </Box  >
                <Box sx={{
                    ml:20,
                    m: 'auto',
                    width:'80%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }
                }}>
                    <LocalPhoneIcon sx={{mr:2}}/>
                    <Typography variant="h6" sx={{mr:10}}>514-515-6898  </Typography> 
                    <LocalPostOfficeSharpIcon sx={{mr:2}}/>
                    <Typography variant="h6" sx={{mr:10}}>gjj085199@gmail.com  </Typography> 
                    
</Box>
                {/* <Box sx={{
                    ml:20,
                    m: 'auto',
                    width:'80%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }
                }}>
                
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                   
                        <BottomNavigationAction sx={{width:300}} label="1 579-637-1483" icon={<LocalPhoneIcon />} />
                        <BottomNavigationAction label="info@waybo.com" href="mailto:info@waybo.com" icon={<LocalPostOfficeSharpIcon />} />
                        <BottomNavigationAction sx={{width:400}}label="12950 rue Brault, local 100
                            Mirabel, Québec, J7J 0W4, Canada" icon={<LocationOnIcon />} />
                     </BottomNavigation>
                </Box> */}
                <Box>

                </Box>
            </Toolbar>
        </AppBar >
    );
}