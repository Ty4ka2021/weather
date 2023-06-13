import { combineReducers, createStore } from 'redux'
import { initialReducer } from './initialReducer'

const rootReducer = combineReducers({
	initialState: initialReducer
})

export const store = createStore(rootReducer)