import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center p-5">
      <h1 className="mb-5 text-8xl text-gray-400"> TIC - TAC -TOE</h1>
      <Board />
    </div>
  );
}

export default App;
