import React from 'react'
import {
  Box, Typography, Container,
  Button
} from '@mui/material'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <Box sx={{
        width: '100%', backgroundColor: '#EEEEEE', height: '60px',
        display: 'flex', boxShadow: '2px 2px 3px #CECECE'
      }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" color="initial" fontWeight={600}>LOGO</Typography>
          <Box>
            <Link to='/login'>
              <Button sx={{ ml: 2, width: '100px', fontSize: '17px' }}>Login</Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Navbar