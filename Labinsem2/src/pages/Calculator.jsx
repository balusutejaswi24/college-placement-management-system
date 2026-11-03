
import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function calculate(operation) {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    if (operation === "+") {
      setResult(a + b);
    } else if (operation === "-") {
      setResult(a - b);
    } else if (operation === "*") {
      setResult(a * b);
    } else if (operation === "/") {
      setResult(b === 0 ? "Cannot divide by zero" : a / b);
    }
  }

  return (
    <div>
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calculate("+")}>Add</button>
      <button onClick={() => calculate("-")}>Subtract</button>
      <button onClick={() => calculate("*")}>Multiply</button>
      <button onClick={() => calculate("/")}>Divide</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
