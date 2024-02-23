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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login = (props) => {
    const nav=useNavigate();
    const {email,setEmail,password,setPassword,loged,setLoged}=React.useContext(Mycontext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setLoged(true);
        nav('/');
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
          <Avatar sx={{width:50,height:50}} src='./Images/skct_logo1_pn.png'/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                  autoComplete="current-password"
                  value={password}
                  onChange={handlepass}
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
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
                  type="submit"
                  fullWidth
                  variant="contained"
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
                    <Link href="#" variant="body2" sx={{color:'#bbb6ae'}}>
                     Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2"sx={{color:'#bbb6ae'}}>
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
