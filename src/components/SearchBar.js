import React from 'react'

function SearchBar() {
  return (
      <div className=' mt-9  '>
          <input className='outline-none p-2 rounded border pa border-sky-400' type="text" name="search" placeholder='Search your favourite music'/>
          {/* <button type="submit">Search</button> */}
        
    </div>
  )
}

export default SearchBar