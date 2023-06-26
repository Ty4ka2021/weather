import classNames from 'classnames'
import React, { useState } from "react"
import Modal from '../../component/HomePage/Modal/Modal'
import Weather from '../../component/HomePage/Weather/Weather'
import s from "./HomePage.module.css"
import homeImg from './img/House.png'
import TabBar from '../../component/HomePage/TabBar/TabBar'

const HomePage = ({ data }) => {

	const [modalActive, setModalActive] = useState(true)

	console.log(data)

	return (
		<>

			{/* <div>
				{data.map(test =>
					<div>{test.name}</div>
				)}
			</div> */}


			<div className={classNames(s.HomePage, [modalActive && s.HomePageHidden])}>

				<TabBar />

				<Weather />
				<img src={homeImg} className={s.img} />
				<Modal />
			</div>
		</>
	)
}

export default HomePage