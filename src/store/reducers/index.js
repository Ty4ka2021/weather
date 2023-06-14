import { applyMiddleware, combineReducers, createStore } from 'redux'
import { initialReducer } from './initialReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	initialReducer: initialReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))