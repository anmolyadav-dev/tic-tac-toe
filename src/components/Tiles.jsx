import React from "react";

function Titles(props) {
  return (
    <div
      className="w-40 h-40 flex items-center justify-center text-6xl border border-white text-white bg-gray-600"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Titles;
