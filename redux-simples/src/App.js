import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Intervalo from './components/Intervalo'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorteio from './components/Sorteio'

function App() {
    
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(10) 

    return ( 
      <div className = "App" >
        <h1>Exercicio React (Redux-Simples)</h1>

        <div className="linha" >
          <Intervalo ></Intervalo>
        </div>

        <div className="linha">
          <Media min={min} max={max} ></Media>
          <Soma  min={min} max={max}></Soma>
          <Sorteio min={min} max={max}></Sorteio>
        </div>

      </div>
    );
}

export default App;