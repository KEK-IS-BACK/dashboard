import './RandomFox.scss'

const RandomFox = props => {
  const {image} = props.apiResult

  return (
    <div className='randomFox'>
      <div className='randomFox__img'>
        <img src={image} alt="Лиса"/>
      </div>
    </div>
  )
}

export default RandomFox