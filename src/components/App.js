import React from 'react';
import { ThemeProvider } from '@emotion/react';

import '../helpers/translations';
import RenderRoutes from '../routes';
import { getTheme } from '../helpers/themes';

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme = {getTheme()}>
        <RenderRoutes />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
