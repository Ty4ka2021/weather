import { addInitDataAction } from '../reducers/initialReducer'

export const fetchData = () => {
	return function (dispatch) {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=a08de665480b63003b05e7ee1153cca8')
			.then(res => res.json())
			.then(json => dispatch(addInitDataAction(json)))
	}
}