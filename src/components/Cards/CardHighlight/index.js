import React from 'react';

import './style.css';

function CardHighlight({ data }) {
  return (
    <div className="cardHighlight">
      <h2>{data.title}</h2>
      <h1>{data.value}<span>{data.unity}</span></h1>
      <div><img src={data.icon} alt=''/></div>
    </div >
  )
}

export default CardHighlight;