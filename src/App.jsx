import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import HomePage from './containers/HomePage/HomePage'
import SearchPage from './containers/SearchPage/SearchPage'
import { addInitDataAction } from './store/reducers/initialReducer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const [currentWeather, setCurrentWeather] = useState(null)

  const state = useSelector(state => state.initialReducer.data[0])


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        setCurrentWeather({ city: searchData.label, ...weatherResponse })
      })
      .then(dispatch(addInitDataAction(currentWeather)))
      .catch((err) => console.log(err))
  }


  return (
    <BrowserRouter>
      <div className='App'>





        <Routes>
          <Route path='/' element={<HomePage data={state} />} />
          <Route path='/search' element={<SearchPage onSearchChange={handleOnSearchChange} />} />


          {/* 
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/people/:userId' element={<PersonPage />} />
        <Route path='/fail' element={<ErrorMessage />} />
        <Route path='/not-found' element={<NotFountPage />} />
        <Route path='/*' element={<NotFountPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App