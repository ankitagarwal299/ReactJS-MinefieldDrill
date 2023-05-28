import "./styles.css";
import React from "react";

let data = [
  [1, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 1]
];

// const ON_COLOR = "red";
// const OFF_COLOR = "grey";
const BOMB = "💣";

function generateGrid(data) {
  return data.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => {
          return (
            <div
              key={cellIndex}
              className={`cell ${cell ? "ON_COLOR" : "OFF_COLOR"}`}
            >
              {cell && BOMB}
            </div>
          );
        })}
      </div>
    );
  });
}

function MineField({ data }) {
  return <div>{generateGrid(data)}</div>;
}

export default function App() {
  return (
    <main>
      <MineField data={data}></MineField>
    </main>
  );
}
