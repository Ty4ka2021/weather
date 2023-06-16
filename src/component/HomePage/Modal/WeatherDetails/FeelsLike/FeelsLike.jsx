import classNames from 'classnames'
import React from "react"
import s from "./FeelsLike.module.css"

const FeelsLike = () => {
	return (
		<div className={classNames(s.FeelsLike, 'detailsItem')}>
			<h3 className={classNames(s.title, 'title')}>FeelsLike</h3>
			<div className={classNames(s.info, 'info')}>19°</div>
			<div className={s.subInfo}>Similar to the actual temperature</div>
		</div>
	)
}

export default FeelsLike