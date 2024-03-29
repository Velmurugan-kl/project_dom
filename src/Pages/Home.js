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
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Footer from './Footer';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
  
}));


export default function ResponsiveGrid(props) {
  const nav = useNavigate();

  const smUp = useMediaQuery('(min-width: 400px)');
  const mdUp = useMediaQuery('(min-width: 900px)');
  return (
    <Box 
    sx={{ flexGrow: 1 ,
    backgroundImage:'url("./Images/home2.jpg")',
    backgroundSize:'cover'}} >
      
      
      <Grid container spacing={{ xs: 3,sm:3, md: 3 }} columns={{ xs: 4, sm: 6, lg:10 , md: 8 }} >


      <Grid item xs={2} sm={2} lg={2} md={2} >
            <Card  sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
                '&:hover': {
                  transition: 'transform 0.1s ease-in-out',
                  transform: 'scale(1.1)',
                },
              }}> 
            <CardMedia onClick={()=>{nav('/piano')}}
            sx={{ height: 150,maxHeight:200 }}
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
              height:120,
              overflow:"hidden",
            }}>
              Unleash your inner musician with our immersive piano tutorials! Whether you're a complete beginner or looking to sharpen your skills, find step-by-step guides tailored to your level. Discover the joy of playing from beginner melodies to advanced pieces, all at your own pace. Start your musical journey today!
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" >Share</Button>
            <Button size="small" onClick={() => nav('/piano')}>Learn More</Button>
            </CardActions>
            </Card>
          </Grid>


          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
                '&:hover': {
                  transition: 'transform 0.1s ease-in-out',
                  transform: 'scale(1.1)',
                },
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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


          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
                '&:hover': {
                  transition: 'transform 0.1s ease-in-out',
                  transform: 'scale(1.1)',
                },
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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


          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
                '&:hover': {
                  transition: 'transform 0.1s ease-in-out',
                  transform: 'scale(1.1)',
                },
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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


          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
                '&:hover': {
                  transition: 'transform 0.1s ease-in-out',
                  transform: 'scale(1.1)',
                },
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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

          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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

          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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

          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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

          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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

          <Grid item xs={2} sm={2} lg={2} md={2} >
          <Card sx={{
                mx: 1,
                my: 2,
                height: 'calc(100vh - 160px)', // Base height for smaller screens
                maxHeight:'400px',
                ...(smUp && { height: 'calc(40vw - 50px)' }), // Adjust for medium screens
                ...(mdUp && { height: 'calc(40vw - 50px)' }), // Adjust for larger screens
              }}>
            <CardMedia
            sx={{ height: 150 ,maxHeight:200}}
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
              height:120,
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