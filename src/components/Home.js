import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Typography variant='h3'>{t('welcome')}</Typography>
    </>
  );
};

export default Home;