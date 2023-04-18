import React from 'react';
import s from './Forecast.module.css'
import weather from '../../assets/Weather-Icon.png'

const Forecast = () => {
  return (
    <div className={s.Forecast}>
      <div className={s.time}>
        12AM
      </div>
      <div className={s.icon}>
        <img src={weather} alt="weather" />
      </div>
      <div className={s.temp}>
        20°
      </div>
    </div>
  );
};

export default Forecast;