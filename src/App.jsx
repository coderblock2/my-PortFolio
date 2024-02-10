import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from "./components/Contact";
function App() {

  return (
    <>
      < Navbar />
      < About />
      < Projects />
      < Skills />
      < Contact />
    </>
  )
}

export default App

