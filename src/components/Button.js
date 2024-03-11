import React from "react";

function Button({ text, clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className=" text-white bg-green-500 px-6 py-2 rounded-sm"
    >
      {" "}
      {text}{" "}
    </button>
  );
}

export default Button;
