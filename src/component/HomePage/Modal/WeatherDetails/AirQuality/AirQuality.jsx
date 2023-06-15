import React from "react"
import s from "./AirQuality.module.css"
import classNames from 'classnames'

const AirQuality = () => {
	return (
		<div className={s.AirQuality}>
			<h3 className={classNames(s.title, 'title')}>Air Quality</h3>
			<div className={s.info}>3-Low Health Risk</div>
			<hr />
		</div>
	)
}

export default AirQuality