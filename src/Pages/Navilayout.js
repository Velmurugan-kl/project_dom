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
import Footer from './Footer';
import { useEffect } from 'react';
import FormDialog from './Logindiag';
import LoadingOverlay from './Loaging';


const pages = ['Products', 'About', 'Instruments'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Navilayout = () => {

  
  const nav=useNavigate();
  const {isLoading,setIsLoading}=React.useContext(Mycontext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showFormDialog, setShowFormDialog] = React.useState(false);

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
    setIsLoading(false);
    nav('/');
  }

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('loged'))){
      setTimeout(() => {
        setShowFormDialog(true);
      }, 3000);
    }
  }, [JSON.parse(localStorage.getItem('loged'))]);

  return (
    <div>
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

              {!JSON.parse(localStorage.getItem('loged')) && (<Box display={'flex'} >
                  <Button variant="text" sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => {nav('/login')}}>Login</Button>
              </Box>)}

          {JSON.parse(localStorage.getItem('loged')) && (<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ bgcolor: 'smokeywhite' }}>{localStorage.getItem('name')[0]}</Avatar>
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
                    localStorage.setItem('loged',false)
                    setIsLoading(true);
                    setTimeout(handle, 3000)
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
    </AppBar>
      <Outlet/>
      {isLoading && <LoadingOverlay/>}
    {showFormDialog && <FormDialog onClose={() => setShowFormDialog(false)} />}
    <Footer/>
    </div>
  );
}
export default Navilayout;

