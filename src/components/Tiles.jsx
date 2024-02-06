import React from "react";

function Titles(props) {
  return (
    <div
      className="md:w-40 md:h-40 mobile:w-24 mobile:h-24 flex items-center justify-center text-6xl border border-white text-white bg-gray-600"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Titles;
