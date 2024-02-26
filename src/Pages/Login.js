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
import { useNavigate } from 'react-router-dom';
import Mycontext from './Mycontext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
const Login = () => {
    const nav=useNavigate();
    const {email,setEmail,password,setPassword,loged,setLoged}=React.useContext(Mycontext)
    var nam=[];
    const [nous,setNous]=React.useState(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // for(let i=0;i<2;i++){
          if(true){
            setNous(false);
            setLoged(true);
            nav('/');
            return;
          }
        // }
        if(nous){
          alert("Please enter a valid email address")
        }
        
    };
    React.useEffect(() => {
      axios.get('https://mocki.io/v1/29e166fd-d1fb-4a71-92e0-fa7a5ffdb53d')
      .then(response => {
        for(let i=0;i<2;i++){
          nam.push(response.data[i].username)
        }
        console.log(nam);
      })
    }, []);

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