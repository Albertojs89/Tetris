import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TablaPartidas } from './components/Partidas'
import title from './assets/title.png'

function App() {
  

  return (
    <>
      <img src="{title}" alt="Titulo Tetris" />
      <h2>TETRIS</h2>
      <TablaPartidas />
    </>
  );
}

export default App

/*
Dudas:
-Que css debo enlacar a html, el App.css o el index.css / y solo funciona con !important
-como añadir una imagen en la app o componente?




*/