import React from 'react'
import {
    Container, Box, Button, Typography, InputAdornment, IconButton, OutlinedInput 
} from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Box sx={{
                height: 'auto', width: '360px',
                boxShadow: '0px 1px 6px 5px #CECECE',
                borderRadius: "20px", textAlign: 'center',
                p: 2
            }}>
                <Typography variant="h5" color="initial">LogIn</Typography>
                <Box
                    sx={{
                        mt: 4,
                        textAlign: 'left',
                    }}
                >
                    <label htmlFor="email" style={{ fontSize: '14px', marginLeft: "2px" }}>Email</label><br />
                    <OutlinedInput
                        type="email"
                        id="email"
                        className="input"
                    />
                    <label htmlFor="password" style={{ fontSize: '14px', marginLeft: "2px" }}>Password</label><br />
                    <input type="password" id="password" className='input' /><br />
                    <Typography variant="body1" color="initial" style={{ fontSize: '14px', textAlign: "right", cursor: 'pointer' }}>Forget Password</Typography>
                </Box>
                <Button sx={{ width: "110px", mt: 2, width: '100%' }}>Login</Button>
                <Box sx={{ my: "20px", cursor: 'pointer' }}>
                    <Link to='/signUp' >
                        <Typography variant="body1" color="initial" style={{ fontSize: '14px', textAlign: "left", cursor: 'pointer' }}>Create New Account!</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Login