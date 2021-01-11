import React, {useState} from "react";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import {createUser} from "../../redux/usersReducer";
import {connect} from 'react-redux'
import './CreateUser.scss'

const CreateUser = props => {
  const {createUser, className} = props

  const [form, setForm] = useState({
    fullName: '',
    aboutMe: '',
    phone: '',
    place: ''
  })

  const onChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    createUser(form)
    setForm({
      fullName: '',
      aboutMe: '',
      phone: '',
      place: ''
    })
  }

  return (
    <div className={`createUser ${className}`}>
      <h1 className='subtitle createUser__title'>Добавить пользователя</h1>
      <form onSubmit={submitHandler}>
        <div className='createUser__body'>

          <label className='createUser__label'>
            <div className='createUser__property'>ФИО:</div>
            <Input type="text"
                   placeholder='Иванов Иван Иванович'
                   name='fullName'
                   value={form.fullName}
                   onChange={onChangeHandler}/>
          </label>

          <label className='createUser__label'>
            <div className='createUser__property'>О себе:</div>
            <textarea placeholder='Например, "Ответственный и жизнерадостный :)"'
                      className='createUser__aboutMe'
                      name='aboutMe'
                      value={form.aboutMe}
                      onChange={onChangeHandler}/>
          </label>

          <label className='createUser__label'>
            <div className='createUser__property'>Номер телефона:</div>
            <Input type="text"
                   placeholder='88005353535'
                   name='phone'
                   value={form.phone}
                   onChange={onChangeHandler}/>
          </label>

          <label className='createUser__label'>
            <div className='createUser__property'>Город:</div>
            <Input type="text"
                   placeholder='Орел'
                   name='place'
                   value={form.place}
                   onChange={onChangeHandler}
            />
          </label>

          <div className='createUser__buttons'>
            <Button type='submit'
                    className='createUser__btnSubmit'
                    value='Создать пользователя'/>
            <Button type='button'
                    className='createUser__btnClear'
                    value='Очистить поля'
                    onClick={() => setForm({
                      fullName: '',
                      aboutMe: '',
                      phone: '',
                      place: ''
                    })}/>
          </div>

        </div>
      </form>
    </div>
  )
}


export default connect(null, {createUser})(CreateUser)