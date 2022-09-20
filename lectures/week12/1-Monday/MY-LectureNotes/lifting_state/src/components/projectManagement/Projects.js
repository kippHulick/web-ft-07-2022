import React from 'react'
import ProjectItem from './ProjectItem'

function Projects({projectsProp, delFunction}) {
  return (

    <div className='container'>
        <div className='row'>
            <div className='col-8 offset-2'>

                <ul>
                {projectsProp.map(project => <ProjectItem key={project.id} project={project} delfunction={delFunction}/>)}
                </ul>
            </div>
            
        </div>
    </div>

  )
}

export default Projects