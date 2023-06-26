import React from "react"
import s from "./TabBar.module.css"
import { NavLink } from 'react-router-dom'
import plusIcon from './img/plus.svg'
import dotsIcon from './img/dots.svg'

const TabBar = () => {
	return (
		<ul className={s.TabBar}>
			<li>
				<NavLink className={s.btn} to='/search' >
					<img src={plusIcon} alt="" />
				</NavLink>
			</li>
			<li>
				<h2 className={s.city}>Kyiv</h2>
			</li>
			<li>
				<div className={s.btn}>
					<img src={dotsIcon} alt="" />

				</div>
			</li>
		</ul>
	)
}

export default TabBar