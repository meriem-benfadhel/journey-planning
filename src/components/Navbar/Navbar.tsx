import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

   
  return (
  
    <nav>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ paddingTop: '5px', paddingBottom: '5px' }}>
        <Grid item xs={4}  sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }} >
        <img src="/vrr.png" alt="vrr-logo" className='vrr-logo ms-lg-4' style={{ marginRight: '30px' }}/>
        <img src="/db.png" alt="db-logo" className='db-logo' style={{ marginRight: '30px' }}/>
        <img src="/transdev.png" alt="transdev-logo" className='transdev-logo my-1'/>
        </Grid>
        <Grid item xs={8} className='links'>
       <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end', 
          flexDirection: 'row'
        }}
        style={{ marginTop: '15px' }}
        >
            <Tooltip title="Einkaufswagen" arrow>
            <a href="#" >
            <MdOutlineShoppingCart />
            </a>
            </Tooltip>
         
            <a href="#"
            style={{ marginLeft: '20px'}}
            >Anmelden</a>
          
    
            <a href="#"
            style={{ marginLeft: '20px', marginRight: '20px'}}
            >Registrieren</a>
      </Box>
        </Grid>
      </Grid>
      </Box>
  </nav>
  )
}
