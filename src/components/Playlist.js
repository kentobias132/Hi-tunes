import React from "react";
import Tracklist from "./Tracklist";
import Button from "./Button";

function Playlist({ onNameChange, playListTrack, onRemove }) {
  function handleNameChange({ target }) {
    onNameChange(target.value);
  }

  return (
    <div className=" bg-blue-950 px-3 py-3 w-1/2 mx-8 ">
      <h1 className="text-white font-extrabold"> Playlist </h1>
      <input
        className="bg-transparent border-b-[1px] py-2 w-[80%] outline-none text-white mb-5 "
        defaultValue={"New Playlist"}
        onChange={handleNameChange}
      />
      <Tracklist
        userSearchResult={playListTrack}
        isRemoval={true}
        onRemove={onRemove}
      />
      <div className="py-6 flex justify-center">
        <Button text={"Add to Spotify"} />
      </div>
    </div>
  );
}

export default Playlist;
