import React from 'react';
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import Searcher from './components/Searcher';
import fetchAPI from './utils/fetchAPI';
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80vw',
  height: '80vh',
  borderRadius: '12px',
  backgroundColor: 'whitesmoke',
}

function App() {

  const isMobile = useMediaQuery('(max-width:520px)');

  const [input, setInput] = React.useState('octocat');
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState(false);

  const getUser = async (user) => {
    const response = await fetchAPI(user);

    if(response.login === 'octocat'){
      localStorage.setItem('default_user', JSON.stringify(user));
    }

    if(response.message){
      setUser(JSON.parse(localStorage.getItem('default_user')));
      setError(true);
      return;
    }

    setUser(response);
    setError(false);
  }

  React.useEffect(() => {
    getUser(input);
  }, [input])

  return (
    <Container sx={styles} >
      <Stack direction={isMobile ? 'column' : 'row'} alignItems="center" marginTop={3}>
        <GitHubIcon sx={{
          width: `${isMobile ? '42px' : '60px'}`,
          height: `${isMobile ? '42px' : '60px'}`,
          marginBottom: `${isMobile ? '12px' : '0px'}`,
          marginRight: `${isMobile ? '8px' : '0px'} `
          }} />
        <Typography variant={isMobile ? "h5" : "h3"}>GitHub User Search!</Typography>
      </Stack>
      <Searcher setInput={setInput} isError={error} />
    </Container>
  )
}

export default App
