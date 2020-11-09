import React, { useState } from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function heandleAddProject(){
    //projects.push('Novo Projeto');
    setProjects([...projects, 'novo projeto']);
    console.log(projects);
  }

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={heandleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
