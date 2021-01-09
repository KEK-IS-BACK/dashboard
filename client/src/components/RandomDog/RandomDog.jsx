import './RandomDog.scss'

const RandomDog = props => {
  const {url} = props.apiResult

  const array = url.split('.')
  const component = array[array.length - 1] === 'mp4' //Файл оканчивается на mp4?
    ? <video autoPlay loop muted>
        <source src={url} type='video/mp4'/>
      </video>
    : <div className='randomDog__img'>
        <img src={url} alt="Собака"/>
      </div>

  return (
    <div className='randomDog'>
      {component}
    </div>
  )
}

export default RandomDog