import classNames from 'classnames'
import React from "react"
import s from "./Sunrise.module.css"

const Sunrise = () => {
	return (
		<div className={classNames(s.Sunrise, 'detailsItem')}>
			<h3 className={classNames(s.title, 'title')}>Sunrise</h3>
			<div className={classNames(s.info, 'info')}>5:28 AM</div>
			<hr />
			<div className={s.subInfo}>Sunset: 7:25PM</div>
		</div>
	)
}

export default Sunrise