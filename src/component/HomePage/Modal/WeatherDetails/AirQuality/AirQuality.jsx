import React from "react"
import s from "./AirQuality.module.css"
import classNames from 'classnames'

const AirQuality = () => {
	return (
		<div className={classNames(s.AirQuality, 'detailsItem')}>
			<h3 className={classNames(s.title, 'title')}>Air Quality</h3>
			<div className={classNames(s.info, 'info')}>3-Low Health Risk</div>
			<hr />
		</div>
	)
}

export default AirQuality