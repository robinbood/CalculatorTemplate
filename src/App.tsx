import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number[]>([]);
  const [digit, setDigit] = useState<number>();

  const first: number = count[0];
  const second: number = count[1];

  const expression: Array<number> = new Array(1).fill([
    count[0],
    digit,
    count[1],
  ]);
  const result = new Array(1).fill([first, digit, second]);

  return (
    <div>
      <blockquote>{expression}</blockquote>
      <div>
        {" "}
        <h3>{result}</h3>
        <h2>{count}</h2>
      </div>

      <div>
        <button onChange={() => setCount([...count, 9])}>9</button>
        <button>8</button>
        <button>7</button>
        <button>AC</button>
        <button onChange={() => setDigit(9)}>+</button>
        <button>+</button>
      </div>
      <div>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>AC</button>
        <button>-</button>
        <button></button>
      </div>
      <div>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>0</button>
        <button onChange={() =>setCount(0)}> RESET</button>
        <button> = </button>
      </div>
    </div>
  );
}
export default App;
