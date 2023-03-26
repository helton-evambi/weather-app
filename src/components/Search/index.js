import { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLocationSearching } from 'react-icons/md'
import { LocationContext } from '../../contexts/locationContext';
import { useFetchSearch } from '../../hooks/api/useFetchSearch';

import './style.css';

function Search() {
  const [focus, setFocus] = useState(false)
  const [query, setQuery] = useState('')
  const { setCity } = useContext(LocationContext)
  const { data, setData, searching } = useFetchSearch(query)

  return (
    <div className='search'>
      <form className='formSearch'>
        <AiOutlineSearch />
        <input
          type='text'
          name='search'
          value={query}
          placeholder='Search for places'
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => {setFocus(false); setQuery(''); setData([]) }, 250) }
          onChange={(e) => setQuery(e.target.value)} />
        <span className='lacationIcon'><MdLocationSearching /></span>
      </form>
      <div
        className='autoCompleteSearch'
        style={focus ? { display: 'block' } : { display: 'none' }}>
        {
          searching ? (<p>Searching...</p>) :
            data?.map((value, index) => {
              return (
                <p key={index} onClick={(e)=>setCity(e.target.innerText)}>{value.name}</p>
              )
            })
        }
      </div>
    </div >
  )
}

export default Search;