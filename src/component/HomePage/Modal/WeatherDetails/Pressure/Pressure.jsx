import classNames from 'classnames'
import React from "react"
import s from "./Pressure.module.css"

const Pressure = () => {
	return (
		<div className={s.Pressure}>
			<h3 className={classNames(s.title, 'title')}>Pressure</h3>
			<div className={s.info}>8 km</div>
			<div className={s.subInfo}>Similar to the actual Pressure</div>
		</div>
	)
}

export default Pressure