import React from "react"
import s from "./Weather.module.css"

const Weather = () => {
	return (
		<div className={s.Weather}>
			<div className={s.temp}>19°</div>
			<div className={s.cloudiness}>Mostly Clear</div>
			<div className={s.tempRange}>
				<span>H:24°</span>
				<span>L:18°</span>
			</div>
		</div>
	)
}

export default Weather