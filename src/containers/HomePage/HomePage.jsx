import React, { useState } from "react"
import Modal from '../../component/HomePage/Modal/Modal'
import Weather from '../../component/HomePage/Weather/Weather'
import s from "./HomePage.module.css"
import homeImg from './img/House.png'
import classNames from 'classnames'

const HomePage = () => {

	const [modalActive, setModalActive] = useState(true)

	return (
		<>
			{/* 
			<div>
				{data.map(test =>
					<div>{test.name}</div>
				)}
			</div> */}


			<div className={classNames(s.HomePage, [modalActive && s.HomePageHidden])}>
				<img src={homeImg} className={s.img} />
				<Weather />
				<Modal />
			</div>
		</>
	)
}

export default HomePage