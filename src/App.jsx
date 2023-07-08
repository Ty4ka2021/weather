import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import { CHomePage } from './containers/HomePage/HomePage'
import SearchPage from './containers/SearchPage/SearchPage'
import { addInitDataAction } from './store/reducers/initialReducer'

const App = () => {
  const dispatch = useDispatch()

  // const state = useSelector(state => state.initialReducer.data[0])
  const state = useSelector(state => ({ state: state.initialReducer.data[0] || {} }))

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        dispatch(addInitDataAction({ city: searchData.label, ...weatherResponse }))
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=50.4501&lon=30.5241&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        dispatch(addInitDataAction({ city: 'Kyiv, UA', ...weatherResponse }))
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(state.state)

  return (
    <BrowserRouter>
      <div className='App'>

        <Routes>

          <Route path='/' element={<CHomePage />} />
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