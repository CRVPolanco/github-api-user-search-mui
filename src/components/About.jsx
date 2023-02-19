import React from 'react';
import { Grid, Stack, Avatar } from '@mui/material';
import BasicData from './BasicData';

const About = ({ isMobile, user }) => {

  const { name, login, bio, avatar_url } = user;

  return (
    <Grid container marginTop={2} direction={!isMobile ? "column" : "row"}>
      <Grid xs={isMobile ? 12 : 3} sx={{ display: 'grid', justifyContent: 'center' }} >
        <Avatar
          src={avatar_url}
          sx={{ width: '96px', height: '96px' }}
        />
      </Grid>
      <Grid xs={isMobile ? 12 : 9}>
        <BasicData isMobile={isMobile} user={user} />

      </Grid>
    </Grid>
  )
}

export default About;
