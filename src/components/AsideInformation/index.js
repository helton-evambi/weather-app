import React from 'react';
import { CiCloud } from 'react-icons/ci'
import { WiHumidity} from 'react-icons/wi'

import './style.css';

function AsideInformation({data}) {
  return(
    <aside className='asideInformation'>
      <div><CiCloud /><p>{data?.current.condition.text}</p></div>
      <div><WiHumidity color='black'/><p>Humidity - {data?.current.humidity} %</p></div>
      <div className='imgCity'>
        <img 
          src='https://2.bp.blogspot.com/-iJAuLyp746M/V1dyaWVVT6I/AAAAAAAAM78/c-5iPGnOVeAhK3zKdAR3vKrsbiKZQrLPACLcB/s400/earth%2B2.jpg' 
          alt=''/>
      </div>
      <div>
        <p className='location'>{data?.location.name}, {data?.location.country}</p>
      </div>

      <div>
        <p className='geo'>Latitute: {data?.location.lat}</p>
      </div>
      <div>
        <p className='geo'>Longitute: {data?.location.lon}</p>
      </div>

    </aside>
  )
}

export default AsideInformation;