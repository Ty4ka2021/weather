import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentWeather } from './utils/network'

const App = () => {

  const dispatch = useDispatch()

  const data = useSelector(state => state.initialState)

  console.log(data)

  useEffect(() => {
    const res = getCurrentWeather()
    dispatch({ type: 'INIT_DATA', payload: res })
  }, [])

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App