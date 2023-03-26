import moment from 'moment/moment';
import { useContext } from 'react';
import { TempUnitContext } from '../../contexts/tempUnitContext';

import './style.css';

function CentralInformation({data}) {
  const {unit} = useContext(TempUnitContext)
  let day = moment(data?.location.localtime, "YYYY-MM-DD hh:mm")
  let temp, degree
  if (unit === 'temp_c') {
    temp = Math.abs(Number(data?.current.temp_c))
    degree = 'C'
  } else if (unit === 'temp_f') {
    temp = Math.abs(data?.current.temp_f)
    degree = 'F'
  }
  return (
    <div className='centralInformation'>
      <div className='image'>
        <img src={data?.current.condition.icon} alt='' />
      </div>
      <h1>{temp}<sup>o<sub>{degree}</sub></sup></h1>
      <p>{day.format('dddd')}, <span>{day?.format('LT')}</span></p>
      <p className='location'>{data?.location.name}</p>
      <p></p>
    </div>
  )
}

export default CentralInformation;