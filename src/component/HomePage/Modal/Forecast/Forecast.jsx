import classNames from 'classnames'
import React, { useState } from "react"
import s from "./Forecast.module.css"
import ForecastItem from './ForecastItem/ForecastItem'

const Forecast = () => {

	const [flag, setFlag] = useState(true)


	return (
		<div className={s.Forecast}>
			<div className={s.btns}>
				<button
					onClick={() => setFlag(!flag)}
					disabled={flag}
					className={classNames(s.btn, [flag && s.active])}
				>
					Hourly Forecast
				</button>
				<button
					onClick={() => setFlag(!flag)}
					disabled={!flag}
					className={classNames(s.btn, [!flag && s.active])}
				>
					Weekly Forecast
				</button>
			</div>
			<span className={s.line}></span>

			<ul className={s.list}>
				{/* {test.map(() => */}
				<li>
					<ForecastItem />
				</li>
				<li>
					<ForecastItem />
				</li>
				<li>
					<ForecastItem />
				</li>
				<li>
					<ForecastItem />
				</li>
				<li>
					<ForecastItem />
				</li>
				{/* )} */}
			</ul>
		</div>
	)
}

export default Forecast