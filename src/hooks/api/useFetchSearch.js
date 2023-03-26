import axios from "axios"
import { useState, useEffect, useRef } from "react";

export function useFetchSearch(query) {
  const [data, setData] = useState(null)
  const [searching, setSearching] = useState(false)
  let timer = useRef(null)
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/search.json',
    params: { q: query },
    headers: {
      'X-RapidAPI-Key': '0b5c27b811mshedc318ca5369c39p154bfcjsn96f7546cca96',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  function search() {
    if (query.length > 3) {
      setSearching(true)
      axios.request(options).then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.error(error);
      }).finally(() => setSearching(false))
    }
  }

  useEffect(() => {
      clearTimeout(timer.current)
      timer.current = setTimeout(search, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { data, setData, searching }
}