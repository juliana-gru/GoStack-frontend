import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/backgroundImg.jpg'

import Header from './components/Header';


function App() {
  const [projects, setProjects] = useState(['Project 1', 'Project 2'])
  
  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => <li key={project.title}>{project}</li>)}  
      </ul> 
      <img width="300" src={backgroundImage}></img>
    </>    
  )  
}

export default App;