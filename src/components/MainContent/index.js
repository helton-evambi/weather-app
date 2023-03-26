import CardHighlight from '../Cards/CardHighlight';
import CardWeather from '../Cards/CardWeather';
import Navbar from '../Navbar';

import './style.css';

function MainContent({data}) {
  const datasCardsHighlights = [
    {
      title: 'UV index',
      value: data?.current.uv,
      unity: '',
      icon: 'https://img.icons8.com/fluency/96/null/sun.png'
    },
    {
      title: 'Wind Status',
      value: data?.current.wind_kph,
      unity: 'Km/h',
      icon: 'https://img.icons8.com/fluency/96/null/wind.png' 
    },
    {
      title: 'Humidity',
      value: data?.current.humidity,
      unity: '%',
      icon: 'https://img.icons8.com/fluency/96/null/wet.png' 
    },
    {
      title: 'Pressure',
      value: data?.current.pressure_mb,
      unity: 'Mb',
      icon: 'https://img.icons8.com/fluency/96/null/atmospheric-pressure.png'
    },
    {
      title: 'Visibility',
      value: data?.current.vis_km,
      unity: 'Km',
      icon: 'https://img.icons8.com/fluency/96/null/headlight.png'
    },
    {
      title: 'Gust',
      value: data?.current.gust_kph,
      unity: 'Km/h',
      icon: 'https://img.icons8.com/fluency/96/000000/water-wind-turbine.png'
    },
  ]


  return (
    <section className="mainContent">
      <Navbar />
      <div className="cards">
        {data?.forecast.forecastday.map((data, index) =>
          <CardWeather key={index} data={data} />
        )}




      </div>
      <h1>Today's Highlights</h1>
      <div className="cards">
        {datasCardsHighlights.map((data, index) =>
        
          <CardHighlight key={index} data={data} />
        )}
      </div>
    </section>
  );
}

export default MainContent;