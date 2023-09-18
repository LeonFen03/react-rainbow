import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './components/ColorBlock'
import ColorForm from './components/ColorForm';

function App(){
  const [input,setInput] = useState();
    const [colors,setColors]  = useState([
      'violet', 'blue',
      'lightblue', 'green',
      'greenyellow', 'yellow',
      'orange', 'red'
  ])
  function addColor (value) {
    setColors((prev) => {
     return [...prev,value ];
    })

  }
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock key={i} color={color} />
        )
    })

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
}



export default App;
