const initialState = {
	data: []
}

export const INIT_DATA = 'INIT_DATA'

export const initialReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_DATA:
			return {
				...state,
				data: [action.payload]
			}


		default: return state
	}
}


export const addInitDataAction = (payload) => ({ type: INIT_DATA, payload })