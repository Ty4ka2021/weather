const initialState = [{
	name: 'test'
}
]




export const initialReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INIT_DATA":
			return {
				data: action.payload
			}


		default: return state
	}
}