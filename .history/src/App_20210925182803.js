import React from 'react';
import './App.scss';
import Header from './components/2_layouts/Header';
import AboutMe from './components/2_layouts/AboutMe';
import MyWorks from './components/2_layouts/MyWorks';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MyWorks />
      <Contact />
    </div>
  );
}

export default App;
