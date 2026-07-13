import React, { useEffect, useState } from 'react'
import '../App.css'

const SearchBox = ({id}) => {

  const [query, setQuery]=useState("");
  const [results, setResults]=useState([]);
  const [isLoading, setIsLoading]=useState("");

  useEffect(()=>{

    if(query.trim()===''){
      setResults([]);
      setIsLoading(query.trim());
      return
    }

    const timeoutId=setTimeout(async() => {
      try {
        const response=await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query.trim()}`);
        const data=await response.json();
        setResults(data.map(fruit=>fruit.name))

        setIsLoading(query.trim());

        console.log(isLoading);
      } catch (error) {
        console.error("Error has occurred to fetch your data. Try again.")
      }
    }, 300);

    return()=>clearTimeout(timeoutId);
  },[query]);

  const handleInput=(selectedFruit)=>{
    setQuery(selectedFruit);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(query.trim()==="") return;

    const encodeQuery=encodeURIComponent(query.trim());
    const searchURL=`https://www.google.com/search?q=${encodeQuery}`;

    window.open(searchURL,'_blank','noopener,noreferrer')

  }

  return (
    <div id="search-bar" className='mt-6' >

        <form onSubmit={handleSubmit}>

          <input value={query} type="search" placeholder='Enter Fruit Names' id={id} className='border-[1.5px] rounded-[5px]' onChange={(e)=>setQuery(e.target.value)} />

          <div className='max-h-50 w-full mt-2 overflow-auto'>

            {results.length>0?
            results.map(item=>(
              <p><button className='cursor-pointer' key={item} id="fruits" onClick={()=>handleInput(item)} type='button'>{item}</button></p>
            )):
            isLoading&&"No results found"}

          </div>

          <button className='my-4 border-2 h-fit w-40 flex items-center justify-center ml-2.25 btn-animation' type='submit'>Search</button>

        </form>
    </div>
  )
}

export default SearchBox