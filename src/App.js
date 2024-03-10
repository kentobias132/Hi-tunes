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
  const [playListName, setPlayListName] = useState("Example playlistname");
  const [playListTrack, setPlayListTrack] = useState([
    {
      name: "Example1",
      artist: "DavidOOfficial",
      album: "Timeless",
      id: "5",
    },
    {
      name: "Example2",
      artist: "The Police",
      album: "Ghost in the Machine",
      id: "6",
    },
    { name: "Example3", artist: "jonneydrill", album: "My Life", id: "7" },
    { name: "Example4", artist: "jonneydrill", album: "My Life", id: "8" },
    { name: "Example5", artist: "jonneydrill", album: "My Life", id: "9" },
    { name: "Example6", artist: "Tekno", album: "Rebel Heart", id: "10" },
  ]);

  const updatePlaylistName = (name) => {
    setPlayListName(name);
  };

  const addTrack = (track) => {
    const existingTrack = playListTrack.find(({ id }) => id === track.id);
    if (!existingTrack) {
      setPlayListTrack([...playListTrack, track]);
      console.log(playListName);
    } else {
      console.log(`${track.name} from ${track.artist} already exists`);
    }
  };

  const removeTrack = (track) => {
    setPlayListTrack(playListTrack.filter(({ id }) => id !== track.id));
  };

  return (
    <div className=" bg-[url('./img/background_photo.jpg')] bg-cover">
      <nav className="text-center bg-blue-950 text-white text-2xl py-3">
        Hi Tunes
      </nav>
      <div className="flex justify-center flex-col items-center mt-6">
        <SearchBar />
        <div className="flex flex-row my-12 w-9/12 mx-auto">
          <SearchResults userSearchResult={searchData} onAdd={addTrack} />
          <Playlist
            onNameChange={updatePlaylistName}
            playListTrack={playListTrack}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
