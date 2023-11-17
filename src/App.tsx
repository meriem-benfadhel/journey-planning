import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from './components/Footer/Footer';
function App() {


  return (
    <div className="App">
      <Main/>
      
      {/* <Navbar/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Main/>
          </Grid>
          <Grid item xs={8}>
          <Sidebar />
          </Grid>
        </Grid>
      </Box>  
      <Footer/>     */}
    </div>
  );
}

export default App;
