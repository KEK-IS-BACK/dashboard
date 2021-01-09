import './Weather.scss'

const Weather = props => {

  const {
    feelslike,
    humidity,
    temperature,
    weather_descriptions,
    wind_dir,
    wind_speed
  } = props.apiResult.current

  return (
    <div className='weather'>
      <div>Температура: {temperature}</div>
      <div>Ощущается на: {feelslike}</div>
      <div>Влажность воздуха: {humidity}</div>
      <div>Описание погоды: {weather_descriptions}</div>
      <div>Направление ветра: {wind_dir}</div>
      <div>Скорость ветра: {wind_speed} м/c</div>
    </div>
  )
}

export default Weather