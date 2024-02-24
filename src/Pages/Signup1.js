import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Mycontext from './Mycontext';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
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
  const {email,setEmail,password,setPassword,next,setNext}=React.useContext(Mycontext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('Password'),
    });
    setEmail(data.get('email'))
    setPassword(data.get('Password'))
    if(data.get('Password')==="" || data.get('Cpassword')===""){
      alert("Enter the password")
    }
    else if(data.get('Password')!==data.get('Cpassword') ){
      alert("Check the password")
    }
    else{
      setTimeout(()=>{

        nav('/login');
      },3000)
    }
  };

  const gender = [
    {value:"Male"},
    {value:"Female"},
    {value:"Other"},
  ];
  
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
          <Avatar sx={{width:50,height:50}} src='./Images/skct_logo1_pn.png'/>
          <Typography component="h1" variant="h5">
            Personal Details
          </Typography>


        {/* profile */}
          {!next && <Box component="form" noValidate onSubmit={()=>{setNext(true)}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  autoFocus
                  variant='filled'
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lasttname"
                  autoFocus
                  variant='filled'
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-number"
                  label="Age"
                  type="number"
                  InputLabelProps={{
                    // shrink: true,
                    style: {color:'#e2ded7'},
                  }}
                  inputProps={{ style: {color:'#e2ded7'} }}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                id="Gender"
                name='gender'
                label="Gender"
                variant="filled"
                inputProps={{ style: {color:'#e2ded7'} }}
                InputLabelProps={{style: {color:'#e2ded7'}}}
                sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
              />
                {/* {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={{color:'blue', backgroundColor:'rgba(228,228,228,0.2)'}}>
                    <p style={{color:'Black'}}>{option.value}</p>
                  </MenuItem>
                ))}
                </TextField> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobilno"
                  label="Mobile"
                  name="mobilno"
                  autoFocus
                  variant='filled'
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
              </Grid>
              <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
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
              </Grid>
              <Grid item xs={12}>
                  <FormControlLabel
                    sx={{color:'#e2ded7'}}
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
            </Grid>
            
          </Box>}

          {/* signup */}

          {next && <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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

            <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={()=>{setNext(false)}}
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
              back
            </Button>
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            </Grid>
          </Box>}


          <Grid container justifyContent="flex-end" sx={{marginTop:2}}>
              <Grid item >
                <Link href="/login" variant="body2" sx={{color:'#e2ded7'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}