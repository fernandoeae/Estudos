import logo from './logo.svg';
import './App.css';
import React from 'react'

import Intervalo from './components/Intervalo'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorteio from './components/Sorteio'

function App() {
    
    return ( 
      <div className = "App" >
        <h1>Exercicio React (Redux-Simples)</h1>

        <div className="linha" >
          <Intervalo></Intervalo>
        </div>

        <div className="linha">
          <Media></Media>
          <Soma></Soma>
          <Sorteio></Sorteio>
        </div>

      </div>
    );
}

export default App;