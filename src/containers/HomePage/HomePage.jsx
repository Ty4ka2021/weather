import classNames from 'classnames'
import React, { useState } from "react"
import { connect } from 'react-redux'
import Modal from '../../component/HomePage/Modal/Modal'
import TabBar from '../../component/HomePage/TabBar/TabBar'
import { CWeather } from '../../component/HomePage/Weather/Weather'
import s from "./HomePage.module.css"
import homeImg from './img/House.png'

const HomePage = ({ data }) => {

	const [modalActive, setModalActive] = useState(true)


	return (
		<>

			<div className={classNames(s.HomePage, [modalActive && s.HomePageHidden])}>

				<TabBar city={data?.city} />

				<CWeather />
				<img src={homeImg} className={s.img} />
				<Modal data={data} />
			</div>
		</>
	)
}

// export default HomePage 

export const CHomePage = connect(state => ({ data: state.initialReducer?.data[0] || {} }),)(HomePage)