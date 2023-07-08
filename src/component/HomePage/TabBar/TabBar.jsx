import React from "react"
import { NavLink } from 'react-router-dom'
import s from "./TabBar.module.css"
import dotsIcon from './img/dots.svg'
import plusIcon from './img/plus.svg'

const TabBar = ({ city }) => {
	return (
		<ul className={s.TabBar}>
			<li>
				<NavLink className={s.btn} to='/search' >
					<img src={plusIcon} alt="" />
				</NavLink>
			</li>
			<li>
				<h2 className={s.city}>{city}</h2>
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