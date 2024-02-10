
import React, { Fragment } from 'react'
import './CSS/about.css'
import student from '../assets/my.png'

function About() {
  return (
    <Fragment>
        <div className='aboutcontainer'>
            <div className='leftabout'>
                <h1>Hi, I'm Anish</h1>
                <h1>I love to build amazing Web</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptate amet mollitia eveniet commodi earum excepturi incidunt et asperiores sapiente repellat laborum porro laboriosam non quis officia doloribus natus vel?</p>
              <div className='addinglink'>
              <a className='firstlink' href=""> Work With Me</a> <a className='secondlink' href="">See My Past Work</a>
              </div>
              </div>
            <div className='rightabout'>
                <img src={student} alt="" />
            </div>
        </div>
    </Fragment>
  )
}

export default About