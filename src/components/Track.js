import React from "react";

function Track({ track, isRemove, onAdd, onRemove }) {
  function renderAction() {
    if (isRemove) {
      return (
        <button
          className="text-yellow-50 cursor-pointer px-3"
          onClick={removeTrack}
        >
          -
        </button>
      );
    } else {
      return (
        <button
          className="text-yellow-50 cursor-pointer px-3"
          onClick={addtrack}
        >
          +
        </button>
      );
    }
  }

  function addtrack() {
    onAdd(track);
  }

  function removeTrack() {
    onRemove(track);
  }
  return (
    <div className=" text-white flex border-b-[1px] py-4 justify-between items-center">
      <div>
        <h3>{track.name}</h3>
        <p>
          by: {track.artist} | {track.album}
        </p>
      </div>
      <div>{renderAction()}</div>
    </div>
  );
}

export default Track;
