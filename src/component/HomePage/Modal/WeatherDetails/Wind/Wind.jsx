import classNames from 'classnames'
import React from "react"
import s from "./Wind.module.css"

const Wind = () => {
	return (
		<div className={s.Wind}>
			<h3 className={classNames(s.title, 'title')}>Wind</h3>
			<div className={s.info}>Compas</div>
		</div>
	)
}

export default Wind