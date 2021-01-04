import React, {useState} from "react";
import './Registration.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../redux/authReducer";

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
          <h1>Регистрация</h1>
          <input type="text"
                 placeholder='Email'
                 name='email'
                 onChange={inputChangeHandler}
                 value={form.email}/>
          <input type="password"
                 placeholder='Пароль'
                 name='password'
                 onChange={inputChangeHandler}
                 value={form.password}/>
          <input type="text"
                 placeholder='ФИО'
                 name='fullName'
                 onChange={inputChangeHandler}
                 value={form.fullName}/>
          <button type='submit'>Зарегестрироваться</button>
          <div>Уже есть аккаунт на Dashboard?</div>
          <NavLink to='/login'>Войти</NavLink>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {signUp})(Registration)