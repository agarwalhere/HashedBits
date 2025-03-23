import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }
    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 space-y-4 bg-white shadow-md rounded-lg">
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => handleCalculate("add")} className="p-2 bg-blue-500 text-white rounded">Add</button>
        <button onClick={() => handleCalculate("subtract")} className="p-2 bg-yellow-500 text-white rounded">Subtract</button>
        <button onClick={() => handleCalculate("multiply")} className="p-2 bg-green-500 text-white rounded">Multiply</button>
        <button onClick={() => handleCalculate("divide")} className="p-2 bg-red-500 text-white rounded">Divide</button>
      </div>
      <div className="text-lg font-semibold text-center bg-gray-100 p-2 rounded-md">
        Result: {result !== null ? result : "-"}
      </div>
    </div>
  );
}
