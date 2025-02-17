import React from 'react';
import Header from './components/Header/Header';
import Stats from './components/Stats';
import OurSolutions from './components/OurSolutions';

function App() {

  return (
    <div className='flex flex-col'>
      <Header />
      <Stats />
      <OurSolutions />
    </div>
  )
}

export default App
