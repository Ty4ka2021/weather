import React from "react"
import s from "./Back.module.css"
import { useNavigate } from 'react-router'
import backIcon from './img/left.svg'

const Back = () => {

	const history = useNavigate()
	const handleGoBack = (e) => {
		e.preventDefault()
		history(-1)
	}


	return (
		<a className={s.Back} href='#' onClick={handleGoBack}>
			<img className={s.arrow} src={backIcon} alt="arrow left" />
		</a>
	)
}

export default Back