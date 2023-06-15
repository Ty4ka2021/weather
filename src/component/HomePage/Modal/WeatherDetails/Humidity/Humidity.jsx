import classNames from 'classnames'
import React from "react"
import s from "./Humidity.module.css"

const Humidity = () => {
	return (
		<div className={s.Humidity}>
			<h3 className={classNames(s.title, 'title')}>Humidity</h3>
			<div className={s.info}>90%</div>
			<div className={s.subInfo}>The dew point is 17 right now</div>
		</div>
	)
}

export default Humidity