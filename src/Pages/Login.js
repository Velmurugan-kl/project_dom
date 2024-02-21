import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
/*import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'*/

const Login = (props) => {
    const nav=useNavigate();
    const loc=useLocation();
    const dat=loc.state;
    const [email,setEmail] =React.useState("");
    const [password,setPassword]= React.useState("");
    const [loged,setLoged] = React.useState(true)
    // const m = dat ? dat.email : "";
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
            //     email: data.get('email'),
            //     password: data.get('password'),
            // });
        const log={isLoged:loged,ifl:"bbn"}
        console.log(log.isLoged+">>>>>>>>>>> login")
        nav('/',{state:log});
    };
    React.useEffect(() => {
        if(dat&&dat.email){
            setEmail(dat.email)
        }
        if(dat&&dat.password){
            setPassword(dat.password)
        }
    }, [dat]);
    const handlemail = (event) =>{
        setEmail (event.target.value )
    }
    const handlepass = (event) => {
        setPassword(event.target.value)
    }
  return (
    <div className='outlog'>
        <Grid container component="main" sx={{width:'70vw', height: '80vh', mx:50 , my:8}}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
                >

                    <Avatar sx={{width:50,height:50}} src='./Images/skct_logo1_pn.png'>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handlemail}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlepass}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>

                </Box>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default Login
