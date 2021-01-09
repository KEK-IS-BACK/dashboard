import './ActiveUser.scss'
import defaultAvatar from '../../../assets/img/jpg/default_avatar.jpg'
import Button from "../../../components/common/Button/Button";
import {useState} from "react";
import UserInfoForm from "./UserInfoForm/UserInfoForm";

const ActiveUser = props => {
  const {activeUser} = props
  const [isEditMod, setIsEditMod] = useState(false)


  if(!activeUser) return <div className='activeUser'>Активный пользователь не выбран</div>

  return (
    <div className='activeUser'>
      <h1 className='activeUser__title subtitle'>Текущий пользователь</h1>
      <div className='activeUser__img'>
        <img src={defaultAvatar} alt="фотография пользователя"/>
      </div>

      {isEditMod
        ? <UserInfoForm setIsEditMod={setIsEditMod} activeUser={activeUser}/>
        : <div className='activeUser__info'>
          <div className='activeUser__fullName subtitle'>{activeUser.fullName}</div>
          <div className='activeUser__aboutMe'>О себе: {activeUser.aboutMe}</div>
          <div className='activeUser__phone'>Номер телефона: {activeUser.phone}</div>
          <div className='activeUser__place'>Город: {activeUser.place}</div>
          <Button value='Изменить' onClick={() => setIsEditMod(true)}/>
        </div>
      }


    </div>
  )
}

export default ActiveUser