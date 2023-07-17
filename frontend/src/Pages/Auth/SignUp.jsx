import React, { useState } from 'react';
import { Box, Button, Typography, InputAdornment, IconButton, OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../Styles.css';

const SignUp = () => {
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
    cPassword: '',
    showPassword: false, // State to toggle password visibility
  });

  const formHandle = (e) => {
    let id, value;
    id = e.target.id;
    value = e.target.value;

    setFormData({
      ...FormData,
      [id]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...FormData,
      showPassword: !FormData.showPassword,
    });
  };

  const GetFormData = () => {
    const { email, password, cPassword } = FormData;

    if (email === '' || password === '' || cPassword === '') {
      alert('Kindly fill the complete form.');
    } else if (password !== cPassword) {
      alert('Password and confirm password should be the same.');
    }
    
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Box
        sx={{
          height: 'auto',
          width: '400px',
          boxShadow: '0px 1px 6px 5px #CECECE',
          borderRadius: '20px',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Typography variant="h5" color="initial">
          Sign Up
        </Typography>
        <Box sx={{ mt: 4, textAlign: 'left' }}>
          <label htmlFor="email" style={{ fontSize: '14px', marginLeft: '2px' }}>
            Email
          </label>
          <br />
          <OutlinedInput
            type="email"
            id="email"
            className="input"
            value={FormData.email}
            onChange={formHandle}
          />
          <br />

          <label htmlFor="password" style={{ fontSize: '14px', marginLeft: '2px' }}>
            Password
          </label>
          <br />
          <OutlinedInput
            type={FormData.showPassword ? 'text' : 'password'}
            id="password" className="input"
            value={FormData.password}
            onChange={formHandle}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {FormData.showPassword ? <VisibilityOffIcon sx={{width:"20px"}}/> : <RemoveRedEyeIcon sx={{width:"20px"}}/>}
                </IconButton>
              </InputAdornment>
            }
          />

          <label htmlFor="cPassword" style={{ fontSize: '14px', marginLeft: '2px' }}>
            Confirm Password
          </label>
          <br />
          <OutlinedInput
            type={FormData.showPassword ? 'text' : 'password'}
            id="cPassword" className="input"
            value={FormData.cPassword}
            onChange={formHandle}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {FormData.showPassword ? <VisibilityOffIcon sx={{width:"20px"}}/> : <RemoveRedEyeIcon sx={{width:"20px"}}/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Button variant="contained" size="small" sx={{ width: '100%', mt: 2 }} onClick={GetFormData}>
          SignUp
        </Button>
        <Box sx={{ my: '20px', cursor: 'pointer' }}>
          <Link to="/login">
            <Typography variant="body1" color="initial" style={{ fontSize: '14px', textAlign: 'left', cursor: 'pointer' }}>
              Already Account!
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;