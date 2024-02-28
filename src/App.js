import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';


// const mockdata = [
//   { name: 'Unavailabe', artist: 'DavidOOfficial', album: 'Timeless', id:  '1' },
//   { name: 'Skin To Skin', artist: 'The Police', album: 'Ghost in the Machine', id: '2' },
//   { name: 'we move', artist: 'jonneydrill', album: 'My Life', id: '3' },
//   {name: 'Fatherly Love', artist: 'Tekno', album: 'Rebel Heart', id:'4'}
// ]

function App() {
  return (
    <div className=' bg-purple-500 h-screen'>
      <nav className='text-center bg-blue-950 text-white text-2xl'>Hi Tunes</nav>
      <div className='flex justify-center flex-col items-center mt-6'>
        <SearchBar />
        <div className='w-3/6'>
          <SearchResults />
          <Playlist />
        </div>
      </div>

    </div>
  );
}

export default App;
