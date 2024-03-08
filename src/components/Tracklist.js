import React from "react";
import Track from "./Track";

function Tracklist({ userSearchResult, isRemoval, onAdd, onRemove }) {
  return (
    <div>
      {userSearchResult.map((track) => (
        <Track
          track={track}
          key={track.id}
          isRemove={isRemoval}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default Tracklist;
