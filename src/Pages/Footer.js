import * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer>
    <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: '#f5f5f5', padding: 4 }}>
      <Grid item xs={6}>
        <Typography variant="body2" color="textSecondary">
          © 2024 Company Name. All rights reserved.
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton color="inherit" aria-label="Facebook">
          <Link href="#">
            <FacebookIcon />
          </Link>
        </IconButton>
        <IconButton color="inherit" aria-label="Instagram">
          <Link href="#">
            <InstagramIcon />
          </Link>
        </IconButton>
        <IconButton color="inherit" aria-label="Twitter">
          <Link href="#">
            <TwitterIcon />
          </Link>
        </IconButton>
      </Grid>
    </Grid>
    </footer>
  );
};

export default Footer;