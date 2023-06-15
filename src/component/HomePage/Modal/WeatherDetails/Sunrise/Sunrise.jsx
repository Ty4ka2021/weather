import classNames from 'classnames'
import React from "react"
import s from "./Sunrise.module.css"

const Sunrise = () => {
	return (
		<div className={s.Sunrise}>
			<h3 className={classNames(s.title, 'title')}>Sunrise</h3>
			<div className={s.info}>5:28 AM</div>
			<hr />
			<div className={s.subInfo}>Sunset: 7:25PM</div>
		</div>
	)
}

export default Sunrise