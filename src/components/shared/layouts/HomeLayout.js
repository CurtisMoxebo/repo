import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default HomeLayout;
