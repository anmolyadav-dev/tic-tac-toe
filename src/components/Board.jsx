import React, { useEffect, useState } from "react";
import Tiles from "./Tiles";
import "../App.css";
const Board = () => {
  const [tileMark, setTileMark] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(false);
  const [isGameOn, setIsGameOn] = useState(true);
  const [winner, setWinner] = useState(null);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        tileMark[a] === tileMark[b] &&
        tileMark[a] === tileMark[c] &&
        tileMark[a] !== null
      ) {
        console.log("winner is player ", tileMark[a]);
        setIsGameOn(false);
        setWinner(tileMark[a]);
      } else if (tileMark.every((element) => element !== null)) {
        console.log("it's a Tie");
        setIsGameOn(false);
        console.log(winner);
      }
    }
  };

  const handleClick = (index) => {
    const copyTileMark = [...tileMark];
    copyTileMark[index] = isPlayerX ? "X" : "O";
    setIsPlayerX((prev) => !prev);
    setTileMark(copyTileMark);
    console.log(index);
  };
  const handleRestart = () => {
    const nullMarks = Array(tileMark.length).fill(null);
    setTileMark(nullMarks);
    setWinner(null);
    setIsGameOn(true);
  };

  useEffect(() => {
    checkWinner();
  }, [tileMark]);

  return isGameOn ? (
    <div className="text-center p-5">
      <div className="row flex">
        {" "}
        <Tiles onClick={() => handleClick(0)} value={tileMark[0]} />
        <Tiles onClick={() => handleClick(1)} value={tileMark[1]} />
        <Tiles onClick={() => handleClick(2)} value={tileMark[2]} />
      </div>
      <div className="row flex">
        <Tiles onClick={() => handleClick(3)} value={tileMark[3]} />
        <Tiles onClick={() => handleClick(4)} value={tileMark[4]} />
        <Tiles onClick={() => handleClick(5)} value={tileMark[5]} />
      </div>
      <div className="row flex">
        <Tiles onClick={() => handleClick(6)} value={tileMark[6]} />
        <Tiles onClick={() => handleClick(7)} value={tileMark[7]} />
        <Tiles onClick={() => handleClick(8)} value={tileMark[8]} />
      </div>
    </div>
  ) : (
    <>
      {winner == null ? (
        <h1 className="md:text-6xl mobile:text-4xl text-white">
          Game Tied !! {winner}{" "}
        </h1>
      ) : (
        <h1 className="md:text-6xl mobile:text-4xl text-white">
          winner is : player {winner}{" "}
        </h1>
      )}
      <button
        className="bg-green-500 px-6 py-3 rounded text-white"
        onClick={() => handleRestart()}
      >
        RESTART
      </button>
    </>
  );
};

export default Board;
