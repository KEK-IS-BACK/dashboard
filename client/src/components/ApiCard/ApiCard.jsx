import './ApiCard.scss'
import {NavLink} from "react-router-dom";


const ApiCard = props => {
  const {
    title,
    description,
    imgPath,
    setActiveApiCard,
    id,
    component
  } = props

  const clickHandler = async () => {
    setActiveApiCard(id)
    localStorage.setItem('lastApiId', id)
  }

  return (
    <div className='apiCard' onClick={clickHandler}>
      <NavLink to={`/details/${component}`}>
        <div className='apiCard__body'>
          <div className='apiCard__img'>
            <img src={imgPath} alt="Картинка Api карточки"/>
          </div>
          <div className='apiCard__info'>
            <h1 className='subtitle apiCard__title'>{title}</h1>
            <p className='apiCard__description'>{description}</p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default ApiCard