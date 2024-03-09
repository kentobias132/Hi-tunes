import React from 'react'
import Tracklist from './Tracklist'
import Button from './Button'

function Playlist({playListName, playListTrack}) {
  return (
<div className=' bg-blue-950 px-3 py-3 w-1/2 mx-8 '>
      <h1 className='text-white font-extrabold'> Playlist </h1>
      <input defaultValue={'New Playlist'} />
      <Tracklist userSearchResult={playListTrack} isRemoval={true} />
      <div className='py-6 flex justify-center'>
        
      <Button text={'Add to Spotify'} />
      </div>
      </div>  )
}

export default Playlist