import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import image from '../images/mtg-logo.png'
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <img src={image} height={40} style={{margin: 10}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Magic The Gathering : Card Search Engine
          </Typography>
          
          <Button color="inherit" onClick={() => {
            navigate("/advancedsearch")
          }}>Advanced Search</Button>
          <Button color="inherit" onClick={() => {
            navigate("/")
          }}>Simple Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}