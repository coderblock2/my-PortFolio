import React, { Fragment } from 'react'
import './CSS/Navbar.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from '@mui/material';

function Navbar() {
  return (
    <Fragment>
        <div className='container'>
               <div className='leftSide'>
                   <ul className='leftul'>
                    <a href="/">Home</a>
                    <a href="#projects">Past Work</a>
                    <a href="#skills">Skills</a>
                    <a href="">Testimonials</a>
                   </ul>
               </div>
               <div className='rightside'>
                <ul className='rightul'>
                    <a href="">Hire Me</a>
                    
                </ul>
                <div className='arrow'>
                    < ArrowForwardIcon />
                </div>
               </div>
        </div>
    </Fragment>
  )
}

export default Navbar