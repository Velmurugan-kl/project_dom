// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const Home = () => {
//   const logged=false;
//   return (
//     <div>
      
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//     </div>
//   )
// }

// export default Home


import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Margin } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
  
}));


export default function ResponsiveGrid() {
  const nav = useNavigate();
  const handlepian= ()=>{
    nav('/piano')
  }
  const handlecar= ()=>{
    nav('/cfront')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={3} md={4} >
            <Card sx={{ maxWidth: 350, mx:2 , my:3}} >
            <CardMedia
            sx={{ height: 140 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary">
  
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={handlepian}>Learn More</Button>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} >
            <Card sx={{ maxWidth: 350, mx:2 , my:3}} >
            <CardMedia
            sx={{ height: 140 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHp2hL10KGXOXyDTcjX7TnUnERO56xBfGsSA&usqp=CAU"
            title="carnatic"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Carnatic
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" >Share</Button>
            <Button size="small" onClick={handlecar}>Learn More</Button>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} >
            <Card sx={{ maxWidth: 350, mx:2 , my:3}} >
            <CardMedia
            sx={{ height: 140 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} >
            <Card sx={{ maxWidth: 350, mx:2 , my:3}} >
            <CardMedia
            sx={{ height: 140 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} >
            <Card sx={{ maxWidth: 350, mx:2 , my:3}} >
            <CardMedia
            sx={{ height: 140 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Grid>
      </Grid>
    </Box>
  );
}