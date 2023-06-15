import React from "react"
import s from "./ForecastItem.module.css"

const ForecastItem = () => {
	return (
		<div className={s.ForecastItem}>
			<div className={s.time}>12AM</div>
			<div className={s.icon}>icon</div>
			<div className={s.temp}>19°</div>
		</div>
	)
}

export default ForecastItem