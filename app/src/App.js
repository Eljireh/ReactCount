import './App.css';
import { useState } from 'react';

function Btn({onClick, children, className}) {
  return(
    <button onClick={onClick} className={className}>{children}</button>
  );
}

function Displayer() {
  const [count, setCount] = useState(0);
  let color = '';
  let limit_text = "";

  if (count >= 13) {
    color = 'rgb(255, 255, 255)';
    limit_text = "Couleur maximale atteinte";
  }

  if (count == 0) {
    color = 'rgb(255, 255, 0)';
  }

  if (count <= -13) {
    color = 'rgb(255, 0, 0)';
    limit_text = "Couleur minimale atteinte";
  }

  function increment() {
    setCount(count+1);
    if (count < 13 && count > 0) {
      color = ('rgb(255,255,' + String(count*20) + ')');
    }
    if (count < 0 && count > - 13) {
      color = ('rgb(255,' + String(255 - Math.abs(count*20)) + ', 0)');
    }
    document.body.style.backgroundColor = color;  
  }
  function decrement() {
    setCount(count-1);
    if (count < 13 && count > 0) {
      color = ('rgb(255, 255,' + String(count*20) + ')');
    }
    if (count < 0 && count > - 13) {
      color = ('rgb(255,' + String(255 - Math.abs(count*20)) + ', 0)');
    }
    document.body.style.backgroundColor = color;
  }

  return (
    <div className='contain'>
      <div>Compteur : {count}</div>
      <Btn onClick={increment} className='increase'>Incrémenter</Btn>
      <Btn onClick={decrement} className='decrease'>Décrémenter</Btn>
      <div className='limit'>{limit_text}</div>
      <p>Le compteur est relié à la couleur de la page.</p>
    </div>
  );
}

function App() {
  return (
    <Displayer />
  );
}

export default App;
