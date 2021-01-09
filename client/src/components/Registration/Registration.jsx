import React, {useState} from "react";
import './Registration.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../redux/authReducer";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

const Registration = (props) => {

  const {signUp} = props

  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: ''
  })

  const inputChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    signUp(form.email, form.password, form.fullName)
  }

  return (
    <div className='registration'>
      <form onSubmit={submitHandler}>
        <div className='registration__body'>
          <h1 className='registration__title title'>Регистрация</h1>
          <Input type="text"
                 className='registration__input'
                 placeholder='Email'
                 name='email'
                 onChange={inputChangeHandler}
                 value={form.email}/>
          <Input type="password"
                 className='registration__input'
                 placeholder='Пароль'
                 name='password'
                 onChange={inputChangeHandler}
                 value={form.password}/>
          <Input type="text"
                 className='registration__input'
                 placeholder='ФИО'
                 name='fullName'
                 onChange={inputChangeHandler}
                 value={form.fullName}/>
          <Button type='submit' value='Зарегестрироваться' className='registration__btnSubmit'/>
          <div className='registration__ask'>Уже есть аккаунт на Dashboard?</div>
          <NavLink to='/login' className='registration__redirect'>Войти</NavLink>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {signUp})(Registration)