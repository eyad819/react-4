import React from 'react';
import Typography from '@mui/material/Typography'
import { Box, useTheme } from '@mui/material';

const NotFound = () => {
  const theme=useTheme()
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h5" >
        There is no desifn yet
        <br />
        <br />
        Please try again later
      </Typography>
    </Box>
  );
}

export default NotFound;
