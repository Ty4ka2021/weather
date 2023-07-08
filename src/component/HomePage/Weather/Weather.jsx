import React from "react"
import { connect } from 'react-redux'
import s from "./Weather.module.css"

const Weather = ({ data }) => {

	console.log(data)

	return (
		<div className={s.Weather}>

			<div>
				<div className={s.temp}>{Math.round(data?.main?.temp)}°</div>
				<div className={s.cloudiness}>{data?.weather[0]?.main}</div>
				<div className={s.tempRange}>
					<span>H:{Math.round(data?.main?.temp_max)}°</span>
					<span>L:{Math.round(data?.main?.temp_min)}°</span>
				</div>
			</div>

		</div>
	)
}

// export default Weather

export const CWeather = connect(state => ({ data: state.initialReducer?.data[0] || {} }),)(Weather)