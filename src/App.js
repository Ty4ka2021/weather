import './App.css';
import Info from './component/Info/Info';
import House from './assets/House.png'

import Modal from './component/Modal/Modal';

function App() {

  let currentCity = 'Kyiv';

  fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=bf35cac91880cb98375230fb443a116f')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })


  return (
    <div className="App">
      <Info currentCity={currentCity} />
      <img className='house' src={House} alt="House" />
      <Modal />
    </div>
  );
}

export default App;
