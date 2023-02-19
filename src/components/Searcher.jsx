import React from 'react';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearcherStyle = {
  width: '80%',
  marginTop: '32px',
}

const Searcher = ({ setInput, isError }) => {

  const [value, setValue] = React.useState('');

  const handleValue = e => setValue(e.target.value);
  const handleSearch = () => setInput(value);

  return(
    <TextField
      variant='outlined'
      id={!isError ? 'outlined-basic' : 'outlined-error-helper-text'}
      label="Search user"
      error={isError}
      helperText={isError && "User doesn't exists"}
      placeholder="octocat"
      sx={SearcherStyle}
      value={value}
      onChange={handleValue}
      InputProps={{
        endAdornment:
          <IconButton
            edge='end'
            position='end'
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
      }}
    />
  )
}

export default Searcher;
