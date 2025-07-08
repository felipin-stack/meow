import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function audio(){

  
}
function App() {

   const tocarSom = () => {
    const audio = new Audio("/videoplayback (1).mp3"); // Caminho do seu arquivo de som
    audio.play();
   }
  return (
    <>
    <h1>DON´T TOUCH THE CAT</h1>
   <img src='/7qh32v.jpg' alt='meow' onClick={tocarSom}/>
    </>
  )
}

export default App
