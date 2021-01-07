import './ApiCard.scss'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const ApiCard = props => {
  const {title, description, httpRequest, setApiResult, imgPath} = props

  const clickHandler = async () => {
    const response = await axios.get(httpRequest)

    setApiResult(response.data)
  }


  return (
    <div className='apiCard' onClick={clickHandler}>
      <NavLink to={`/details`}>
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