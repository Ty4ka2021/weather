import React, { useState } from 'react';
import './Modal.css'
import Forecast from '../Forecast/Forecast';

const Modal = () => {

  const [test, setTest] = useState(true)

  function testFunction() {
    setTest(test => !test)
  }

  return (
    <div className='Modal'>
      <div className='blind'>

      </div>
      <div className='forecastBtns'>
        <button
          onClick={testFunction}
          className={test ? 'forecastBtn active' : 'forecastBtn'}
          disabled={test}
        >Hourly Forecast</button>
        <button
          onClick={testFunction}
          className={test ? 'forecastBtn' : 'forecastBtn active'}
          disabled={!test}
        >Weekly Forecast</button>
      </div>
      <div className='line'></div>

      <div className='forecastList'>
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
    </div>
  );
};

export default Modal;