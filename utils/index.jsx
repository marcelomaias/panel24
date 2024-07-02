
import Weather from "@/components/Weather"

const openWeatherMapApi = 'dec8ac5aa73a767fbf998957636cbc70'
const lat = '-25.4295963'
const lon = '-49.2712724'

export async function getLatLong() {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Curitiba,Parana&appid=${openWeatherMapApi}`)

  const result = await response.json()
  return result
}

export async function getWeather() {

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${openWeatherMapApi}`

  const response = await fetch(url, { next: { revalidate: 60 } })

  const result = await response.json()
  return (
    <Weather data={result} />
  )
}

export function setIcon(icon) {

  let iconImg

  switch (icon) {
    case '01d':
      console.log('clear sky');
      iconImg = 'wi--day-sunny.svg';
      break;
    case '01n':
      console.log('clear sky');
      iconImg = 'wi--night-clear.svg';
      break;

    case '02d':
    case '03d':
    case '04d':
      console.log('cloudy');
      iconImg = 'wi--cloudy.svg';
      break;

    case '02n':
    case '03n':
    case '04n':
      console.log('cloudy');
      iconImg = 'wi--cloudy.svg';
      break;

    case '09n':
    case '09d':
    case '10n':
    case '10d':
      console.log('rain');
      iconImg = 'wi--wu-rain.svg';
      break;
    case '11n':
    case '11d':
      console.log('thunderstorm');
      iconImg = 'wi--thunderstorm.svg';
      break;
    case '13n':
    case '13d':
      console.log('snow');
      iconImg = 'wi--snowflake-cold.svg';
      break;
    case '50n':
    case '50d':
      console.log('mist');
      iconImg = 'wi--fog.svg';
      break;
  }

  return iconImg
}

