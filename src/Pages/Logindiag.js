import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loged,setLoged]=useState(false);
  const [next,setNext]=useState(false);
  const handlemail = (event) =>{
    setEmail (event.target.value )
}
const handlepass = (event) => {
    setPassword(event.target.value)
}
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
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
                  inputProps={{ style: {color:'black'} }}
                  InputLabelProps={{style: {color:'black'}}}
                  sx={{'& .MuiInputLabel-root':{color:'black'}}}
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
                  inputProps={{ style: {color:'black'} }}
                  InputLabelProps={{style: {color:'black'}}}
                  sx={{'& .MuiInputLabel-root':{color:'black'}}}
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
                    <Link href="#" variant="body2" sx={{color:'#7e7e7e'}}>
                     Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup1" variant="body2"sx={{color:'#7e7e7e'}}>
                       {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}