import React, { useContext } from 'react';
import moment from 'moment';

import './style.css';
import { TempUnitContext } from '../../../contexts/tempUnitContext';

function CardWeather({ data }) {
  const { unit } = useContext(TempUnitContext)
  let maxTemp, minTemp, degree
  if (unit === 'temp_c') {
    maxTemp = Math.abs(data?.day.maxtemp_c)
    minTemp = Math.abs(data?.day.mintemp_c)
    degree = 'C'
  } else if (unit === 'temp_f') {
    maxTemp = Math.abs(data?.day.maxtemp_f)
    minTemp = Math.abs(data?.day.mintemp_f)
    degree = 'F'
  }
  let day = moment(data?.date, "YYYY-MM-DD")
  return (
    <div className="cardWeather">
      <h2>{day.format('ddd')}</h2>
      <div className="icon">
        <img
          src={data?.day.condition.icon}
          alt='' />
      </div>
      <p>{maxTemp}
        <sup>o<sub>{degree}</sub></sup> - <span>{minTemp}
          <sup>o<sub>{degree}</sub></sup></span></p>
    </div>
  )
}

export default CardWeather;