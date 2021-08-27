import { useState } from 'react';
import * as math from 'mathjs'
import './App.css';
import Numbers from './components/Numbers';
import Result from './components/Result';


function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const showText = (value) =>{
    setText((text) => [...text, value + " "])
  }

  const calculateNumbers = () => {
    const input = text.join('')
    setResult(math.evaluate(input))
  }

  const clearInput = () => {
    setText("")
    setResult("")
  }
  return (
    <div className="App">
      <div className="calculator">
        <Result text={text} result={result} />
        <div className="row">
          <Numbers symbol="7" clicked={showText} />
          <Numbers symbol="8" clicked={showText} />
          <Numbers symbol="9" clicked={showText} />
          <Numbers symbol="DEL" clicked={clearInput} />
        </div>
        <div className="row">
          <Numbers symbol="4" clicked={showText} />
          <Numbers symbol="5" clicked={showText} />
          <Numbers symbol="6" clicked={showText} />
          <Numbers symbol="/" clicked={showText} />
        </div>
        <div className="row">
          <Numbers symbol="1" clicked={showText} />
          <Numbers symbol="2" clicked={showText} />
          <Numbers symbol="3" clicked={showText} />
          <Numbers symbol="*" clicked={showText} />
        </div>
        <div className="row">
          <Numbers symbol="." clicked={showText} />
          <Numbers symbol="0" clicked={showText} />
          <Numbers symbol="=" clicked={calculateNumbers} />
          <Numbers symbol="+" clicked={showText} />
          <Numbers symbol="-" clicked={showText} />
        </div>
      </div>
    </div>
  );
}

export default App;
