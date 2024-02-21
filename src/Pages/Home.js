import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate } from 'react-router-dom';

// const Home = () => {
//   const logged=false;
//   return (
//     <div>
      
//     <Card style={cardStyle}sx={{ maxWidth: 345 }}>
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





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
  
}));


export default function ResponsiveGrid(props) {
  const nav = useNavigate();
  const loc = useLocation();
  const dat = loc.state;
  const [loged,setLoged]=React.useState(false);
  const loge=dat.isloged;
  console.log(loge+">>>>>>>>>>>>>>> home")
  React.useEffect(() => {
      if(dat && dat.isloged){
        setLoged(true)
      }
  }, [dat]);

  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',

}
  return (
    <Box 
    sx={{ flexGrow: 1 ,
    backgroundImage:'url("./Images/home1.jpeg")',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'}} >
      
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


          <Grid item xs={2} sm={3} md={3} >
            <Card style={cardStyle} sx={{ maxWidth: 300, mx:2 , my:3 , height:430}} >
            <CardMedia
            sx={{ height: 150 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.5,
              minHeight:150,
              maxHeight:150,
              overflow:"hidden",
            }}>
            Unleash your inner musician with our immersive piano tutorials! Whether you're a complete beginner or looking to sharpen your skills, find step-by-step guides tailored to your level. Discover the joy of playing from beginner melodies to advanced pieces, all at your own pace. Start your musical journey today!
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={() => nav('/piano')}>Learn More</Button>
            </CardActions>
            </Card>
          </Grid>


          <Grid item xs={2} sm={3} md={3} >
            <Card style={cardStyle}sx={{ maxWidth: 300, mx:2 , my:3 ,height:430}} >
            <CardMedia
            sx={{ height: 150 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHp2hL10KGXOXyDTcjX7TnUnERO56xBfGsSA&usqp=CAU"
            title="carnatic"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Carnatic
            </Typography>
            <Typography variant="body2" color="text.secondary"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.5,
              minHeight:150,
              maxHeight:150,
              overflow:"hidden",
            }}>
              This captivating South Indian tradition goes beyond entertainment, offering a path to inner peace and cultural exploration. Its rich history, spiritual depths, and mesmerizing melodies transport listeners to a world of timeless beauty and artistic discovery.
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" >Share</Button>
            <Button size="small" onClick={() => nav('/cfront')}>Learn More</Button>
            </CardActions>
            </Card>
          </Grid>


          <Grid item xs={2} sm={3} md={3} >
            <Card style={cardStyle}sx={{ maxWidth: 300, mx:2 , my:3, height:430}} >
            <CardMedia
            sx={{ height: 150 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.5,
              minHeight:150,
              maxHeight:150,
              overflow:"hidden",
            }}>
                About thepage
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Grid>


          <Grid item xs={2} sm={3} md={3} >
            <Card style={cardStyle}sx={{ maxWidth: 300, mx:2 , my:3, height:430}} >
            <CardMedia
            sx={{ height: 150 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.5,
              minHeight:150,
              maxHeight:150,
              overflow:"hidden",
            }}>
            About thepage

            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Grid>


          <Grid item xs={2} sm={3} md={3} >
            <Card style={cardStyle}sx={{ maxWidth: 300, mx:2 , my:3,height:430}} >
            <CardMedia
            sx={{ height: 150 }}
            image="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-piano-day.jpg"
            title="piano"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Piano
            </Typography>
            <Typography variant="body2" color="text.secondary"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.5,
              minHeight:150,
              maxHeight:150,
              overflow:"hidden",
            }}>
              About thepage

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