'use client';

import { ThemeProvider } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import theme from '../styles/theme';

const EmotionProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default EmotionProvider;