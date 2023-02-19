import React from 'react';
import { Stack, Typography } from '@mui/material';

const BasicData = ({ isMobile, user }) => {

  const { name, login, bio } = user;

  return (
    <Stack>
      <Stack direction="column" marginTop={1.5}>
        <Typography variant={isMobile ? "h5" : "h3"}>{name}</Typography>
        <Typography variant={isMobile ? "h7" : "h6"}>@{login}</Typography>
      </Stack>
      <Stack>
        <Typography variant={isMobile ? "h7" : "h5"} marginTop={2}>{!!bio ? bio : 'Lorem ipsum dolor sit'}</Typography>
      </Stack>
    </Stack>
  )
}

export default BasicData;
