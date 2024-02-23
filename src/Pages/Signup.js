import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Mycontext from './Mycontext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const nav=useNavigate();
  const {email,setEmail,password,setPassword}=React.useContext(Mycontext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get('email'))
    setPassword(data.get('Password'))

    if(data.get('Password')==="" || data.get('Cpassword')===""){
      alert("Enter the password")
    }
    else if(data.get('Password')!==data.get('Cpassword') ){
      alert("Check the password")
    }
    else{
      nav('/login');
    }
  };


  return (
    <div className='sig' >
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
          sx={{marginTop:8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:10,
            width:450,
            padding:5,
            backdropFilter:'blur(8px) saturate(120%)',}}>
          <Avatar sx={{ m: 1, bgcolor: '#e2ded7' }} src='./Images/avat.png'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Password"
                  label="Password"
                  name="Password"
                  variant='filled'
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cpassword"
                  label="Confirm Password"
                  type="password"
                  id="Cpassword"
                  autoComplete="new-password"
                  variant='filled'
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2 ,
                backgroundColor: '#bbb6ae',
                color: '#4b4b4b',
                '&:hover': {
                  backgroundColor: '#8d8d8d', 
                  color: '#fff', 
                },
              }}
            >
              Next
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" sx={{color:'#bbb6ae'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}