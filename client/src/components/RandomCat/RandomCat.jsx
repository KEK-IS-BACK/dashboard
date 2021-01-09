import './RandomCat.scss'

const RandomCat = props => {
  const {file} = props.apiResult
  console.log(props.apiResult)
  return (
    <div className='randomCat'>
      <div className='randomCat__img'>
        <img src={file} alt="Кошка"/>
      </div>

    </div>
  )
}

export default RandomCat