import React from "react"
import AirQuality from './AirQuality/AirQuality'
import FeelsLike from './FeelsLike/FeelsLike'
import Humidity from './Humidity/Humidity'
import Pressure from './Pressure/Pressure'
import Rainfall from './Rainfall/Rainfall'
import Sunrise from './Sunrise/Sunrise'
import UvIndex from './UvIndex/UvIndex'
import Visibility from './Visibility/Visibility'
import s from "./WeatherDetails.module.css"
import Wind from './Wind/Wind'

const WeatherDetails = () => {
	return (
		<div className={s.WeatherDetails}>
			<AirQuality />
			<UvIndex />
			<Sunrise />
			<Wind />
			<Rainfall />
			<FeelsLike />
			<Humidity />
			<Visibility />
			<Pressure />


		</div>
	)
}

export default WeatherDetails