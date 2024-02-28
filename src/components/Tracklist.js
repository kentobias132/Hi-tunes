import React from 'react'
import Track from './Track'



function Tracklist({name, artist, album, id}) {

    return (
    <>
        <div>Tracklist</div>
        <Track name={name} artist={artist} album={album} id={id} />
    </>
        
  )
}

export default Tracklist