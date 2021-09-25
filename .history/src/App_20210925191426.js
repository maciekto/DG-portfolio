import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './components/2_layouts/Header';
import AboutMe from './components/2_layouts/AboutMe';
import MyWorks from './components/2_layouts/MyWorks';
import Contact from './components/2_layouts/Contact';
import Nav from './components/2_layouts/Nav';

function App() {
  const [NavOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MyWorks />
      <Contact />
      <Nav NavOpen={NavOpen}/>
    </div>
  );
}

export default App;
