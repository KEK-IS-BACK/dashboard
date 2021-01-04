import React, {useState} from "react";
import './Login.scss'
import {NavLink} from "react-router-dom";
import {signIn} from "../../redux/authReducer";
import {connect} from 'react-redux'

const Login = (props) => {
  const {signIn} = props

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const inputChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    signIn(form.email, form.password)
  }

  return (
    <div className='login'>
      <form onSubmit={submitHandler}>
        <div className='login__body'>
          <h1>Вход</h1>
          <input type="text"
                 placeholder='Email'
                 name='email'
                 value={form.email}
                 onChange={inputChangeHandler}/>
          <input type="password"
                 placeholder='Password'
                 name='password'
                 value={form.password}
                 onChange={inputChangeHandler}/>
          <button type='submit'>Войти</button>
          <div>Еще нет аккаунта на Dashboard?</div>
          <NavLink to='/registration'>Зарегестрироваться</NavLink>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {signIn})(Login)