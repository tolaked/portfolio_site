import React from 'react';
import Header from './component/Header';
import About from './component/About';
import FirstSection from './component/FirstSection'
import Projects from './component/Projects'
import Blogs from './component/Blogs'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <FirstSection/>
     <About/>
     <Blogs/>
     <Projects/>
    </div>
  );
}

export default App;
