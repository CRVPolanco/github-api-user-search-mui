import React from 'react';
import { Grid, Stack, Avatar } from '@mui/material';
import BasicData from './BasicData';
import StatusData from './StatusData';

const About = ({ isMobile, user }) => {

  const { name, login, bio, avatar_url } = user;

  return (
    <Grid container marginTop={2} direction={!isMobile ? "column" : "row"}>
      <Grid item xs={isMobile ? 12 : 3} sx={{ display: 'grid', justifyContent: 'center' }} >
        <Avatar
          src={avatar_url}
          sx={{ width: '96px', height: '96px' }}
        />
      </Grid>
      <Grid item xs={isMobile ? 12 : 9}>
        <BasicData isMobile={isMobile} user={user} />
        <StatusData user={user} isMobile={isMobile} />
      </Grid>
    </Grid>
  )
}

export default About;
