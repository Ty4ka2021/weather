import classNames from 'classnames'
import React from "react"
import s from "./Visibility.module.css"

const Visibility = () => {
	return (
		<div className={classNames(s.Visibility, 'detailsItem')}>
			<h3 className={classNames(s.title, 'title')}>Visibility</h3>
			<div className={classNames(s.info, 'info')}>8 km</div>
			<div className={s.subInfo}>Similar to the actual visibility</div>
		</div>
	)
}

export default Visibility