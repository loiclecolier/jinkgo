import React, { useRef } from 'react'
import './App.css';
import Home from './Containers/Home/Home';
import Valeurs from './Containers/Valeurs/Valeurs';
import Competences from './Containers/Competences/Competences';
import Notele from './Containers/Notele/Notele';
import Contact from './Containers/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const refContainers = useRef();

  return (
    <>
      <Navbar forwardRef={refContainers} />
      <div ref={refContainers} id="containers">
        <Home forwardRef={refContainers} />
        <Valeurs />
        <Competences />
        <Notele />
        <Contact />
      </div>
    </>
  );
}

export default App;
