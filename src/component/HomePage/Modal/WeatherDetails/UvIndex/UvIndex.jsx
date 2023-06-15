import classNames from 'classnames'
import React from "react"
import s from "./UvIndex.module.css"

const UvIndex = () => {
	return (
		<div className={s.UvIndex}>
			<h3 className={classNames(s.title, 'title')}>Uv Index</h3>
			<div className={s.info}>4 Moderate</div>
			<hr />
		</div>
	)
}

export default UvIndex