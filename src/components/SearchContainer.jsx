import React, { useState } from 'react'
import SearchBox from './SearchBox'

const id="input-item"

const SearchContainer = () => {


  return (
    <div id="fruit-search-container" className='bg-white flex flex-col items-center min-h-31 w-65 rounded-[15px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
          <label htmlFor="input-item" className='mt-1'>Search for the Fruits:</label>
          <div className='h-fit w-fit'>
          <SearchBox id={id}/>
        </div>
    </div>
  )
}

export default SearchContainer