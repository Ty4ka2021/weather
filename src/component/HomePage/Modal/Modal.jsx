import React from "react"
import Forecast from './Forecast/Forecast'
import s from "./Modal.module.css"
import WeatherDetails from './WeatherDetails/WeatherDetails'

const Modal = () => {
	return (
		<div className={s.Modal}>
			<Forecast />
			<WeatherDetails />
		</div>
	)
}

export default Modal