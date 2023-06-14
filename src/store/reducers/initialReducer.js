const initialState = {
	data: [
		{ id: 1, name: 'test' },
		{ id: 2, name: 'test2' },
		{ id: 3, name: 'test3' }
	]
}

export const INIT_DATA = 'INIT_DATA'

export const initialReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_DATA:
			console.log('initdata')
			return {
				...state,
				data: [...state.data, action.payload]
			}


		default: return state
	}
}


export const addInitDataAction = (payload) => ({ type: INIT_DATA, payload })