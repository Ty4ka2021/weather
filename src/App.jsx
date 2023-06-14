import React from "react"
import { fetchData } from './store/asynkActions/fetchData'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.initialReducer.data)

  console.log(data)

  return (
    <>
      <div>
        {data.map(test =>
          <div>{test.name}</div>
        )}
        <button onClick={() => dispatch(fetchData())}>Отримати дані</button>
      </div>
    </>
  )
}

export default App