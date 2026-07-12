import React, { useEffect, useState } from 'react'

const SearchBox = ({id}) => {

  const [query, setQuery]=useState("");
  const [results, setResults]=useState([]);

  useEffect(()=>{

    if(query.trim()===''){
      setResults([])
      return
    }

    const timeoutId=setTimeout(async() => {
      try {
        const response=await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`);
        const data=await response.json();
        setResults(data.map(fruit=>fruit.name))

        console.log(data)
      } catch (error) {
        console.error("Error has occurred to fetch your data. Try again.")
      }
    }, 300);

    return()=>clearTimeout(timeoutId);
  },[query]);

  return (
    <div id="search-bar" className='mt-6' >
        <input value={query} type="search" placeholder='Enter Fruit Names' id={id} className='border-[1.5px] rounded-[5px]' onChange={(e)=>setQuery(e.target.value)} />
        <div className='max-h-18 w-full mt-2 overflow-auto'>
          {results.length>0?
          results.map(item=>(
            <p key={item} id="fruits">{item}</p>
          )):
          "No results found"}
        </div>
    </div>
  )
}

export default SearchBox