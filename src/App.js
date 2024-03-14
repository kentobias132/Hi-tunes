import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from "./util/Spotify/Spotify";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [playListName, setPlayListName] = useState("");
  const [playListTrack, setPlayListTrack] = useState([]);

  const updatePlaylistName = (name) => {
    setPlayListName(name);
  };

  const addTrack = (track) => {
    const existingTrack = playListTrack.find(({ id }) => id === track.id);
    if (!existingTrack) {
      setPlayListTrack([...playListTrack, track]);
    } else {
      console.log(`${track.name} from ${track.artist} already exists`);
    }
  };

  const removeTrack = (track) => {
    setPlayListTrack(playListTrack.filter(({ id }) => id !== track.id));
  };

  const savePlaylist = () => {
    const trackUrls = playListTrack.map((t) => t.uri);
    Spotify.savePlaylist(playListName, trackUrls).then(() => {
      setPlayListName("");
      setPlayListTrack([]);
    });
  };

  async function handleSearch(term) {
    const searchResponse = await Spotify.search(term);

    setSearchData(searchResponse);

    console.log(term);
  }

  return (
    <div className="min-h-screen bg-[url('./img/background_photo.jpg')] bg-cover">
      <nav className="text-center bg-blue-950 text-white text-2xl py-3">
        Hi Tunes
      </nav>
      <div className="flex justify-center flex-col items-center mt-6">
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-row my-12 w-9/12 mx-auto">
          <SearchResults userSearchResult={searchData} onAdd={addTrack} />
          <Playlist
            onNameChange={updatePlaylistName}
            playListTrack={playListTrack}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
