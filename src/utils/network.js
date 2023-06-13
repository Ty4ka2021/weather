export const getApiResource = async (url) => {
	const res = await fetch(url)
	const body = await res.json()
	return body
	// await для того щоб функція асинхронна дочекалась відповіді і виконалась





	// для того щоб ловити помилки 
	// try {
	// 	const res = await fetch(url)

	// 	if (!res.ok) {
	// 		console.error('Could not fetch.', res.status)
	// 		return false
	// 	}
	// 	return await res.json()
	// } catch (error) {
	// 	console.error('Could not fetch.', error.message)
	// 	return false
	// 	//test
	// }
}

export const getCurrentWeather = () => {
	getApiResource('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=a08de665480b63003b05e7ee1153cca8')
}