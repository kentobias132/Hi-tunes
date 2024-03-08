import React from "react";
import Tracklist from "./Tracklist";
import Track from "./Track";

function SearchResults({ userSearchResult, onAdd }) {
  return (
    <div className="bg-blue-950 px-3 py-3 w-1/2 mx-8 ">
      <h1 className="text-white font-extrabold"> Results</h1>
      <Tracklist
        userSearchResult={userSearchResult}
        isRemoval={false}
        onAdd={onAdd}
      />
    </div>
  );
}

export default SearchResults;
