import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import api from './services/api'
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function heandleAddProject(){
    //projects.push('Novo Projeto');
    //setProjects([...projects, 'novo projeto']);
    const response = await api.post('projects', {
      title: "React-Native",
      owner: "Eduardo Silva"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={heandleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
