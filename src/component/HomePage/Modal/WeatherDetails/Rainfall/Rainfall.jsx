import classNames from 'classnames'
import React from "react"
import s from "./Rainfall.module.css"

const Rainfall = () => {
	return (
		<div className={s.Rainfall}>
			<h3 className={classNames(s.title, 'title')}>Rainfall</h3>
			<div className={s.info}>1.8 mm in last hour</div>
			<div className={s.subInfo}>1.2 mm expacted in next 24h</div>
		</div>
	)
}

export default Rainfall