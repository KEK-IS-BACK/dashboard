import Input from "../../../../components/common/Input/Input";
import Button from "../../../../components/common/Button/Button";
import {useState} from "react";
import {connect} from 'react-redux'
import {updateUserInfo} from "../../../../redux/usersReducer";

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
    <form onSubmit={submitHandler}>
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

      <Button type='submit'
              value='Сохранить'/>
    </form>
  )
}

export default connect(null, {updateUserInfo})(UserInfoForm)