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
  const {email,setEmail,password,setPassword,next,setNext}=React.useContext(Mycontext)
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
              onClick={()=>{setNext(false);nav('/signup1')}}
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" sx={{color:'#bbb6ae'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}


// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Mycontext from './Mycontext';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import FilledInput from '@mui/material/FilledInput';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const Login = () => {
//     const nav = useNavigate();
//     const [vmail,setVmail]=React.useState(false)
//     const [vpass,setVpass]=React.useState(false)
//     const {email,setEmail,password,setPassword,setLoged}=React.useContext(Mycontext)
//     const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  

    
//     const handleSubmit = async () => {
//       try {
//         const response = await axios.get('https://retoolapi.dev/5M2qFh/data');
//         const fetchedData = response.data; 
//         const matchingUser = fetchedData.find(user => user.mail === email && user.password === password);
//         if (matchingUser) {
//           setVpass(true);
//           setVmail(true);
//           setLoged(true);
//           nav('/');
//         } else {
//           alert("Invalid email or password. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error fetching or processing data:", error);
//       }
//     };

//     const [showPassword, setShowPassword] = React.useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);
  
//     const handleMouseDownPassword = (event) => {
//       event.preventDefault();
//     };
  

//     const handlemail = (event) =>{
//         setEmail (event.target.value )
//     }
//     const handlepass = (event) => {
//         setPassword(event.target.value)
//     }

//     const defaultTheme = createTheme();
//   return (
//     <div className='sig'>
//         <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
            
//           }}
//         >
//           <Box
//           sx={{marginTop:14,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             borderRadius:10,
//             width:450,
//             padding:5,
//             backdropFilter:'blur(8px) saturate(120%)',}}>
//           <Avatar sx={{width:50,height:50}} src='./Images/skct_logo1_pn.png'/>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" noValidate  sx={{ mt: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                  <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   variant='filled'
//                   value={email}
//                   onChange={handlemail}
//                   inputProps={{ style: {color:'#e2ded7'} }}
//                   InputLabelProps={{style: {color:'#e2ded7'}}}
//                   sx={{'& .MuiInputLabel-root':{color:'#e2ded7'},}}
//                   />
//               </Grid>
//               <Grid item xs={12}>
//               {/* <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   variant='filled'
//                   value={password}
//                   onChange={handlepass}
//                   inputProps={{ style: {color:'#e2ded7'} }}
//                   InputLabelProps={{style: {color:'#e2ded7'}}}
//                   sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
//                 /> */}
//                 <FormControl variant="filled" sx={{ width: '100%' }}>
//                   <InputLabel htmlFor="filled-adornment-password" style={{ color: '#e2ded7' }} >
//                     Password
//                   </InputLabel>
//                   <FilledInput
//                     id="filled-adornment-password"
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={handlepass}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"
//                           sx={{color:'#e2ded7'}}
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                     inputProps={{ style: { color: '#e2ded7' } }} // Set input text color
//                   />
//                 </FormControl>

//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   sx={{color:'#e2ded7'}}
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                   />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                 onClick={handleSubmit}
//                   type="button"
//                   fullWidth
//                   variant="contained"
//                   id='sub'
//                   name='sub'
//                   // sx={{ backgroundColor:'#bbb6ae', color:'#4b4b4b'}}
//                   sx={{
//                     backgroundColor: '#bbb6ae',
//                     color: '#4b4b4b',
//                     '&:hover': {
//                       backgroundColor: '#8d8d8d', 
//                       color: '#fff', 
//                     },
//                   }}
//                   >
                    
//                   Sign In
//                 </Button>
//               </Grid>
//               <Grid item xs={12}>
//                 <Grid container >
//                   <Grid item xs >
//                     <Link href="#" variant="body2" sx={{color:'#e4e4e4'}}>
//                      Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="/signup1" variant="body2"sx={{color:'#e4e4e4'}}>
//                        {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Grid>

//               </Grid>
//             </Box>
//           </Box>
//         </Box>
        
//       </Container>
//     </ThemeProvider>
//     </div>
//   )
// }

// export default Login