import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components';
import { ThemeProvider } from '@/components/utils/theme-provider';

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default App
