import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, useNavigate } from 'react-router-dom';
import Mycontext from './Mycontext';


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
import FormDialog from './Logdialog';

const pages = ['Products', 'About', 'Instruments'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Navilayout = () => {


  // const FormDialog = () => {
  //   const [open, setOpen] = React.useState(false);
  
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  //   const [email,setEmail]=useState("");
  //   const [password,setPassword]=useState("");
  //   const [loged,setLoged]=useState(false);
  //   const [next,setNext]=useState(false);
  //   const handlemail = (event) =>{
  //     setEmail (event.target.value )
  // }
  // const handlepass = (event) => {
  //     setPassword(event.target.value)
  // }
  //   return (
  //     <React.Fragment>
  //       <Dialog
  //         open={open}
  //         onClose={handleClose}
  //         PaperProps={{
  //           component: 'form',
  //           onSubmit: (event) => {
  //             event.preventDefault();
  //             const formData = new FormData(event.currentTarget);
  //             const formJson = Object.fromEntries(formData.entries());
  //             const email = formJson.email;
  //             console.log(email);
  //             handleClose();
  //           },
  //         }}
  //       >
  //         <DialogTitle>Subscribe</DialogTitle>
  //         <DialogContent>
  //           <DialogContentText>
  //             To subscribe to this website, please enter your email address here. We
  //             will send updates occasionally.
  //           </DialogContentText>
  //           <Grid container spacing={2}>
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
  //                   sx={{'& .MuiInputLabel-root':{color:'#e2ded7'}}}
  //                   />
  //               </Grid>
  //               <Grid item xs={12}>
  //               <TextField
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
  //                 />
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
  //                   type="submit"
  //                   fullWidth
  //                   variant="contained"
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
  //         </DialogContent>
  //         <DialogActions>
  //           <Button onClick={handleClose}>Cancel</Button>
  //           <Button type="submit">Subscribe</Button>
  //         </DialogActions>
  //       </Dialog>
  //       </React.Fragment>
  //   );
  // }
  
  // React.useEffect(() => {
  //   <Dialog
  //        open={true}
  //       // onClose={handleClose}
  //       PaperProps={{
  //         component: 'form',
  //         onSubmit: (event) => {
  //           event.preventDefault();
  //           const formData = new FormData(event.currentTarget);
  //           const formJson = Object.fromEntries(formData.entries());
  //           const email = formJson.email;
  //           console.log(email);
  //           // handleClose();
  //         },
  //       }}
  //     >
  //       <DialogTitle>Subscribe</DialogTitle>
  //       <DialogContent>
  //         <DialogContentText>
  //           To subscribe to this website, please enter your email address here. We
  //           will send updates occasionally.
  //         </DialogContentText>
  //         <TextField
  //           autoFocus
  //           required
  //           margin="dense"
  //           id="name"
  //           name="email"
  //           label="Email Address"
  //           type="email"
  //           fullWidth
  //           variant="standard"
  //         />
  //       </DialogContent>
  //       <DialogActions>
  //         <Button >Cancel</Button>
  //         <Button type="submit">Subscribe</Button>
  //       </DialogActions>
  //     </Dialog>
  // }, [])
  

  
  const nav=useNavigate();
  const {loged,setLoged}=React.useContext(Mycontext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handle = () => {

  }

  return (
    <AppBar position="static" sx={{background:'linear-gradient(rgba(14, 12, 12, 0.71),rgba(14, 26, 32, 0.868));'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />


          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            POPZTUNE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>

              ))}
            </Menu>
          </Box>


          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            POPZTUNE
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

              {!loged && (<Box display={'flex'} >
                  <Button variant="text" sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => {nav('/login')}}>Login</Button>
              </Box>)}

          {loged && (<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="./Images/avat.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => {
                  if (setting === "Logout") {
                    setLoged(false); // Handle logic for logging out
                  } else if (setting === "Account") {
                    nav('/pchase'); // Navigate to account page
                  } else {
                    handleCloseUserMenu(); // Handle other settings or close menu
                  }
                }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>)}

        </Toolbar>
      </Container>
      <Outlet/>
    </AppBar>
  );
}
export default Navilayout;

