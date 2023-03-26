import axios from "axios"
import { useState, useEffect } from "react";

export function useFetch(url, city){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const options = {
    method: 'GET',
    url: url,
    params: { q: city, days: '3' },
    headers: {
      'X-RapidAPI-Key': '0b5c27b811mshedc318ca5369c39p154bfcjsn96f7546cca96',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  useEffect(() => {
    axios.request(options).then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error(error);
    }).finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])
  
  return {data, loading}
}