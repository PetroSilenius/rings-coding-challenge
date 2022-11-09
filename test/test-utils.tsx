import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from 'theme';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export const mockedRouter = {
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  prefetch: jest.fn(() => null),
};

jest.mock('next/router', () => ({
  useRouter() {
    return mockedRouter;
  },
}));

export * from '@testing-library/react';
export { customRender as render };
