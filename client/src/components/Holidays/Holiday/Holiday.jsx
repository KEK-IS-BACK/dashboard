import './Holiday.scss'

const Holiday = props => {
  const {name, description, type, date} = props

  return (
    <div className='holiday'>
      <div className='holiday__field'>
        <div className='holiday__property'>Название праздника: </div>
        <div><div className='holiday__name'>{name}</div></div>
      </div>
      <div className='holiday__field'>
        <div className='holiday__property'>Описание: </div>
        <div className='holiday__description'> {description}</div>
      </div>
      <div className='holiday__field'>
        <div className='holiday__property'>Тип: </div>
        <div className='holiday__type'>{type}</div>
      </div>
      <div className='holiday__field'>
        <div className='holiday__property'>Дата (гггг.мм.дд): </div>
        <div className='holiday__date'>{date}</div>
      </div>




    </div>
  )
}

export default Holiday