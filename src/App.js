import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  const [searchData, setSearchData] = useState([
    {
      name: "Unavailabe",
      artist: "DavidOOfficial",
      album: "Timeless",
      id: "1",
    },
    {
      name: "Skin To Skin",
      artist: "The Police",
      album: "Ghost in the Machine",
      id: "2",
    },
    { name: "we move", artist: "jonneydrill", album: "My Life", id: "3" },
    { name: "Fatherly Love", artist: "Tekno", album: "Rebel Heart", id: "4" },
  ]);

  return (
    <div className=" bg-[url('./img/background_photo.jpg')] bg-cover">
      <nav className="text-center bg-blue-950 text-white text-2xl py-3">
        Hi Tunes
      </nav>
      <div className="flex justify-center flex-col items-center mt-6">
        <SearchBar />
        <div className="flex flex-row my-12 w-9/12 mx-auto">
          <SearchResults userSearchResult={searchData} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
