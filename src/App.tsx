import { useState } from "react";
import "./App.css";

type Operand = "+" | "-" | "*" | "/" | null;

function App() {
  const [digit, setDigit] = useState<number[]>([]);
  const [digit2, setDigit2] = useState<number[]>([]);
  const [operator, setOperator] = useState<Operand>(null);

  const first = Number(digit.join(""));
  const second = Number(digit2.join(""));

  const calculateResult = () => {
    switch (operator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return second !== 0 ? first / second : "Error";
      default:
        return first;
    }
  };

  const push = (value: number) => {
    if (operator) {
      setDigit2([...digit2, value]);
    } else {
      setDigit([...digit, value]);
    }
  };

  const handleOperator = (op: Operand) => {
    const result = calculateResult();
    setDigit(String(result).split("").map(Number));
    setDigit2([]);
    setOperator(op);
  };

  const reset = () => {
    setDigit([]);
    setDigit2([]);
    setOperator(null)
    
  };

  

  return (
    <div>
      <div>
        <h2>
          {digit.join("")} {operator} {digit2.join("")}
        </h2>
      </div>
      <div>
        <h3>{calculateResult()}</h3>
      </div>
      
      <div>
        <button onClick={() => push(9)}>9</button>
        <button onClick={() => push(8)}>8</button>
        <button onClick={() => push(7)}>7</button>
        <button onClick={() => handleOperator("+")}>+</button>
        <button onClick={() => handleOperator("*")}>*</button>
        <button onClick={() => push(3)}>3</button>
        <button onClick={() => push(2)}>2</button>
        <button onClick={() => push(1)}>1</button>
      </div>
      <div>
        <button onClick={() => push(6)}>6</button>
        <button onClick={() => push(5)}>5</button>
        <button onClick={() => push(4)}>4</button>
        <button onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleOperator}>=</button>
        <button onClick={() => push(0)}>0</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
}
export default App;
