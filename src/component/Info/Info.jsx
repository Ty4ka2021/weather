import React from 'react';
import './Info.css'

const Info = (props) => {
  return (
    <div className="info">
      <div className='currentCity'>
        Kyiv
      </div>

      <div className='temp'>
        20°
      </div>

      <div className='desc'>
        Mostly clear
      </div>

      <div className='minMax'>
        <div className='max'>22°</div>
        <div className='min'>16°</div>
      </div>
    </div>
  );
};

export default Info;