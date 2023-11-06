import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

const EmotionProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;