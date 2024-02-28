import React from 'react'

function Track({name, artist, album, id}) {
  return (
      <div>
          <h2>Track</h2>
          <h3>{name}</h3>
          <p>by: {artist} &nbs | {album} </p> 
          {/* <button onClick={() => console.log(id)}>Play</button> */}
          <hr/>
    </div>
  )
}

export default Track