import React, {useState, useEffect} from 'react'
import Projects from './Projects'
import AddProject from './AddProject'
import {v4 as uuidv4} from 'uuid'

function ProjectManagement() {

  const [projects, setProjects] = useState([])

  console.log(projects);

  useEffect(() => {
    
    setProjects([
      {
        id: uuidv4(),
        category: 'Front-end',
        title: 'Javascript'
      },
      {
        id: uuidv4(),
        category: 'Back-end',
        title: 'Node'
      },
      {
        id: uuidv4(),
        category: 'Front-end',
        title: 'React'
      },
    ])

  }, [])

  const delFunction = (id) => {
    
    let filteredProjects = projects.filter(project=>{

      return id !== project.id
    })

    setProjects(filteredProjects)  //reseting our state with project removed

  }

  const addProject = (newProjectObj) => setProjects([newProjectObj, ...projects])


  return (
    <>
      <h1>ProjectManagement</h1>

      <Projects projectsProp={projects} delFunction={id => delFunction(id)}/>

      <AddProject addProjectProp={project => addProject(project)} />
    </>
  )
}

export default ProjectManagement

