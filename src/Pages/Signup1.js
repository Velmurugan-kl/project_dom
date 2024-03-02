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
import { useNavigate } from 'react-router-dom';
import Mycontext from './Mycontext';
import axios from 'axios';


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
  const[cpass,setCpass]=React.useState("")
  const [fname,setFname]=React.useState("")
  const [lname,setLname]=React.useState("")
  const [phone,setPhone]=React.useState("")
  const [next,setNext]=React.useState(false);
  const {email,setEmail,password,setPassword}=React.useContext(Mycontext);
  const [vmail,setVmail]=React.useState(true);
  const [pcap,setPcap]=React.useState(true);
  const [psym,setPsym]=React.useState(true);
  const [plen,setPlen]=React.useState(true);
  const [pnum,setPnum]=React.useState(true);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
  const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,20}$/;
  let errorMessage = "";
  
  const handlePost = async () => {
    const pdata={
      mail: email,
      plan: "Free Plan",
      phone: phone,
      Premium: true,
      lastname: lname,
      password: password,
      firstname: fname
    }
    await axios.post('https://retoolapi.dev/5M2qFh/data',pdata)
    
  }
  
  const handleCheck = async() => {
    try {
      const response = await axios.get('https://retoolapi.dev/5M2qFh/data');
      const fetchedData = response.data; 
      const matchingUser = fetchedData.find(user => user.mail === email );
      // console.log(matchingUser,'matching --------p[-=========== ')
      if (matchingUser) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    if(!handleCheck()){
      alert("user already exist");
    }
    else{
      if(password ==="" || cpass ===""){
        alert("Enter the password");
      }
      else if(password !== cpass ){
        alert("Check the password")
      }
      else{
        handlePost();
        nav('/login');
      }
    }
  };
  
  const handlePass = (e) =>{
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^\w\s]/.test(password);
    const hasValidLength = password.length >= 6 && password.length <= 20;
    if(passRegex.test(password)){
      setPlen(true) ;setPcap(true);setPnum(true);setPsym(true);
      
    }
    else{
      if (!hasUppercase) {
        setPcap(false);
      }
      if (!hasNumber) {
        setPnum(false)
      }
      if (!hasSymbol) {
        setPsym(false)
      }
      if (!hasValidLength) {
        setPlen(false);
      }
    }
    setPassword(e.target.value);
  }
  const handleCpass = (e) =>{
      setCpass(e.target.value);
  }
  const handleMail = (e) =>{
      setEmail(e.target.value);
      if(emailRegex.test(email)){ 
        setVmail(true);
      }
      else{
          setVmail(false)
      }
  }
  const handlefname = (e) =>{
    setFname(e.target.value);
  }
  const handlelname = (e) =>{
    setLname(e.target.value);
  }
  const handlephone = (e) =>{
    setPhone(e.target.value);
  }
  const handlenxt = () =>{
    if(fname && lname && phone){
      setNext(true);
    }
    else{
      alert("Enter all the fields")
    }
  }

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
          {!next && <Box component="form" noValidate sx={{ mt: 3 }}>
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
                  value={fname}
                  onChange={handlefname}
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
                  variant='filled'
                  value={lname}
                  onChange={handlelname}
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

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobilno"
                  label="Mobile"
                  name="mobilno"
                  variant='filled'
                  value={phone}
                  onChange={handlephone}
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
              </Grid>
              <Grid item xs={12}>
              <Button
                onClick={handlenxt}
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
              
            </Grid>
            
          </Box>}

          {/* signup */}

          {next && <Box component="form" noValidate sx={{ mt: 3 }}>
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
                  onFocus={() =>{setVmail(false)} }
                  onBlur={() => {setVmail(true)}}
                  value={email}
                  onChange={handleMail}
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
                  {!vmail && (<Typography sx={{color:'#e2ded7'}}>"Please enter a valid email address."</Typography>)}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cpassword"
                  label="Password"
                  type="password"
                  id="Cpassword"
                  autoComplete="new-password"
                  variant='filled'
                  onFocus={() => {setPlen(false) ;setPcap(false);setPnum(false);setPsym(false)}}
                  onBlur={() => {setPlen(true) ;setPcap(true);setPnum(true);setPsym(true)}}
                  value={password}
                  onChange={handlePass}
                  inputProps={{ style: {color:'#e2ded7'} }}
                  InputLabelProps={{style: {color:'#e2ded7'}}}
                  sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
                  />
                  {!pcap && (<Typography sx={{color:'#e2ded7'}}>"Missing uppercase letter. "</Typography>)}
                  {!pnum && (<Typography sx={{color:'#e2ded7'}}>"Missing Number. "</Typography>)}
                  {!psym && (<Typography sx={{color:'#e2ded7'}}>"Missing symbol. "</Typography>)}
                  {!plen && (<Typography sx={{color:'#e2ded7'}}>"Password must be greater than 6 charcters"</Typography>)}
                  
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Password"
                  label="Confirm Password"
                  name="Password"
                  variant='filled'
                  value={cpass}
                  onChange={handleCpass}
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
              onClick={handleSubmit}
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