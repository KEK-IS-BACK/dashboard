import Input from "../../../../components/common/Input/Input";
import Button from "../../../../components/common/Button/Button";
import {useState} from "react";
import {connect} from 'react-redux'
import {updateUserInfo} from "../../../../redux/usersReducer";
import './UserInfoForm.scss'

const UserInfoForm = props => {
  const {setIsEditMod, activeUser, updateUserInfo} = props
  const [form, setForm] = useState({
    fullName: activeUser.fullName,
    aboutMe: activeUser.aboutMe,
    phone: activeUser.phone,
    place: activeUser.place
  })

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    updateUserInfo(activeUser._id, form)
    setIsEditMod(false)
  }

  return (
    <div className='updateUserForm'>
      <form onSubmit={submitHandler}>
        <div className='updateUserForm__body'>
          <Input className='updateUserForm__fullName'
                 placeholder='ФИО'
                 value={form.fullName}
                 onChange={changeHandler}
                 name='fullName'/>

          <textarea className='updateUserForm__aboutMe'
                    placeholder='Несколько слов о себе'
                    value={form.aboutMe}
                    onChange={changeHandler}
                    name='aboutMe'/>

          <Input className='updateUserForm__phone'
                 placeholder='Номер телефона'
                 value={form.phone}
                 onChange={changeHandler}
                 name='phone'/>

          <Input className='updateUserForm__place'
                 placeholder='Город'
                 value={form.place}
                 onChange={changeHandler}
                 name='place'/>
          <div className='updateUserForm__buttons'>
            <Button type='submit'
                    className='updateUserForm__btnSubmit'
                    value='Сохранить'/>
            <Button type='button'
                    className='updateUserForm__btnCancel'
                    onClick={() => {
                      setIsEditMod(false)
                    }}
                    value='Отмена'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect(null, {updateUserInfo})(UserInfoForm)