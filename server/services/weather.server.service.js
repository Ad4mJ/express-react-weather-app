const axios = require("axios");

/**
 * Returns temp, humidity, wind, city, description.
 *
 * @param {number} lat latitude Coordinates.
 * @param {number} lon longitude Coordinates.
 * @return {Object} temp, humidity, wind, city, description object.
 */
module.exports.getWeather = async (lat, lon) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9b7cdda100b385f32905ded030287258`;
	
	try {
		const response = await axios.get(url);
        const data = {
            temp: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description
        };
		return data;
	} catch (error) {
		console.log(error);
	}
};
