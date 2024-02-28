import React from 'react'
import Tracklist from './Tracklist'
import Track from './Track'

const mockdata = [
  { name: 'Unavailabe', artist: 'DavidOOfficial', album: 'Timeless', id:  '1' },
  { name: 'Skin To Skin', artist: 'The Police', album: 'Ghost in the Machine', id: '2' },
  { name: 'we move', artist: 'jonneydrill', album: 'My Life', id: '3' },
  {name: 'Fatherly Love', artist: 'Tekno', album: 'Rebel Heart', id:'4'}
]

function SearchResults() {
  return (
    <div className=' border-2 bg-purple-950  '>
          <h1 className='text-white font-extrabold'> Results</h1>
          {mockdata.map(data => <Tracklist name={data.name} artist={data.artist} album={data.album} id={data.id} />)}
        {/* <Tracklist name={name} artist={artist} album={album} id={id} /> */}
      </div>
    
  )
}

export default SearchResults