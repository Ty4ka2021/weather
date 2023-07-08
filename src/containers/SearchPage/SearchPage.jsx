import React, { useState } from "react"
import { useNavigate } from 'react-router'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_OPTIONS, GEO_API_URL } from '../../api'
import Back from '../../component/Back/Back'
import s from "./SearchPage.module.css"

const SearchPage = ({ onSearchChange }) => {
	const navigate = useNavigate()

	const [search, setSearch] = useState(null)

	const handleOnChange = (searchData) => {
		setSearch(searchData)
		onSearchChange(searchData)
	}



	const loadOptions = (inputValue) => {
		return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, GEO_API_OPTIONS)
			.then(response => response.json())
			.then(response => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						}
					})
				}
			})
			.catch(err => console.error(err))
	}

	return (
		<div className={s.SearchPage}>
			<Back />

			<AsyncPaginate
				placeholder='Search for city'
				debounceTimeout={600}
				value={search}
				onChange={handleOnChange}
				loadOptions={loadOptions}
				onClick={navigate('/')}
			/>
		</div>
	)
}

export default SearchPage