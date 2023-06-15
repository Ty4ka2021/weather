import React from "react"
import Modal from '../../component/HomePage/Modal/Modal'
import Weather from '../../component/HomePage/Weather/Weather'
import s from "./HomePage.module.css"
import homeImg from './img/House.png'

const HomePage = () => {
	return (
		<>
			{/* 
			<div>
				{data.map(test =>
					<div>{test.name}</div>
				)}
			</div> */}


			<div className={s.HomePage}>
				<img src={homeImg} className={s.img} />
				<Weather />
				<Modal />
			</div>
		</>
	)
}

export default HomePage