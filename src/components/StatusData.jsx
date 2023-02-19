import React from 'react';
import { Divider, Paper, Stack, Typography } from '@mui/material';

const StatusData = ({ user, isMobile }) => {

  const { public_repos, followers, following } = user;

  return(
    <Paper elevation={3}>
      <Stack direction="row" justifyContent="space-evenly" marginTop={2}>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
};

export default StatusData;
