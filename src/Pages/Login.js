import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mycontext from './Mycontext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingOverlay from './Loaging';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';

const Login = () => {
    const nav = useNavigate();
    const [vmail,setVmail]=useState(false)
    const [vpass,setVpass]=useState(false)
    const [isLoading, setIsLoading] = useState(false);

    var load=true;
    const {email,setEmail,password,setPassword,setLoged}=React.useContext(Mycontext)
    
    const Loading = () => {
      return (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 450,
            width:450,
            backdropFilter:'blur(2px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000, // Ensure overlay is above other content
          }}
        >
          <CircularProgress size={80} sx={{color:'white'}} />
        </Box>
      );
    };
    
    const handleSubmit = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://retoolapi.dev/5M2qFh/data');
        const fetchedData = response.data; 
        const matchingUser = fetchedData.find(user => user.mail === email && user.password === password );
        if (matchingUser) {
          localStorage.setItem('id',matchingUser.id)
          localStorage.setItem('uemail',email);
          localStorage.setItem('upass',password);
          localStorage.setItem('loged',true);
          nav('/');
        } else {
          alert("Invalid email or password. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
      setIsLoading(false);
    };
    
   

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  

    const handlemail = (event) =>{
        setEmail (event.target.value )
    }
    const handlepass = (event) => {
        setPassword(event.target.value)
    }

    const defaultTheme = createTheme();
  return (
    <div className='sig'>
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          

          <Box
          sx={{marginTop:14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:10,
            width:450,
            padding:5,
            backdropFilter:'blur(8px) saturate(120%)',}}>
            {isLoading && <Loading/>}
              

          <Avatar sx={{width:50,height:50}} src='./Images/skct_logo1_pn.png'/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                 <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant='filled'
                  value={email}
                  onChange={handlemail}
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'},}}
                  />
              </Grid>
              <Grid item xs={12}>
              {/* <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant='filled'
                  value={password}
                  onChange={handlepass}
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                /> */}
                <FormControl variant="filled" sx={{ width: '100%' }}>
                  <InputLabel htmlFor="filled-adornment-password" style={{ color: '#e2ded7' }} >
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlepass}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          sx={{color:'#e2ded7'}}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{ style: { color: '#e2ded7' } }} // Set input text color
                  />
                </FormControl>

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  sx={{color:'#e2ded7'}}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  />
              </Grid>
              <Grid item xs={12}>
                <Button
                onClick={handleSubmit}
                  type="button"
                  fullWidth
                  variant="contained"
                  id='sub'
                  name='sub'
                  // sx={{ backgroundColor:'#bbb6ae', color:'#4b4b4b'}}
                  sx={{
                    backgroundColor: '#bbb6ae',
                    color: '#4b4b4b',
                    '&:hover': {
                      backgroundColor: '#8d8d8d', 
                      color: '#fff', 
                    },
                  }}
                  >
                    
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Grid container >
                  <Grid item xs >
                    <Link href="#" variant="body2" sx={{color:'#e4e4e4'}}>
                     Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup1" variant="body2"sx={{color:'#e4e4e4'}}>
                       {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              </Grid>
                  
            </Box>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default Login