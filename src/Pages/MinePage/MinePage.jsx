import * as React from 'react';
import Timer from './Timer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

const MinePage = () => {
  return (
    <Container maxWidth="90%">
      <Box sx={{ height: '100vh' }}>
        <Timer />
      </Box>
    </Container>
  );
};

export default MinePage;
