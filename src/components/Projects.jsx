import React from 'react'
import './CSS/projects.css'
import {AllProjects} from './Data' 


function Projects() {
  return (
    <section id='projects'>
    <div className='projectContainer'>
       <div className='icon'><svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  width="48" 
  height="48" 
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
  />
</svg>




 </div>
       <h1 className='heading'>Apps I've Built</h1>
       <div className='about-it'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis dicta neque possimus quibusdam dolores impedit voluptate, nemo, iste mollitia obcaecati, non quidem? elit. Ipsa minima rerum minus!</div>
    
        <div className='myallproject'>
          {AllProjects.map((allProj)=>(
            
           <a className='imagelink'  href={allProj.link} key={allProj.image}>
            <h2>Title: {allProj.title}</h2>
           <div className='projimage'>
             <img src={allProj.image} alt=""/>
           </div>
         </a>
        
          ))}
          
        </div>
       
       </div> 
      </section>
  )
}

export default Projects