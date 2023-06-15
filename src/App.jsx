import React, { useEffect } from "react"
import { fetchData } from './store/asynkActions/fetchData'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.initialReducer.data)

  useEffect(() => {
    // dispatch(fetchData())
    console.log(data)
  }, [])

  return (
    <BrowserRouter>
      <div className='App'>





        <Routes>
          <Route path='/' element={<HomePage />} />


          {/* <Route path='/people' element={<PeoplePage />} />
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