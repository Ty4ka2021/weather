import classNames from 'classnames'
import React from "react"
import s from "./UvIndex.module.css"

const UvIndex = () => {
	return (
		<div className={classNames(s.UvIndex, 'detailsItem')}>
			<h3 className={classNames(s.title, 'title')}>Uv Index</h3>
			<div className={classNames(s.info, 'info')}>4 Moderate</div>
			<hr />
		</div>
	)
}

export default UvIndex