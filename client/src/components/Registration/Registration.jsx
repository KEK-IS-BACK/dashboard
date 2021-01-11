import React, {useState} from "react";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import FormError from "../common/FormError/FormError";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../redux/authReducer";
import './Registration.scss'

const Registration = (props) => {
  const {signUp} = props

  const [errors, setErrors] = useState()
  const [message, setMessage] = useState()
  const [isLoading, setIsLoading] = useState(false)
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
    setErrors(null)
    setMessage(null)
    setIsLoading(true)

    const data = await signUp(form.email, form.password, form.fullName)

    if (data && data.errors) setErrors(data.errors)
    if (data && data.message) setMessage(data.message)

    setIsLoading(false)
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
          {
            errors &&
            <div className='registration__errors'>
              {errors.map((error, i) => <FormError key={i}
                                                   text={error.msg}
                                                   className='registration__error'/>)}
            </div>

          }
          {
            message && <div className='registration__message'>{message}</div>
          }
          <Button type='submit'
                  value='Зарегестрироваться'
                  className='registration__btnSubmit'
                  disabled={isLoading}/>
          <div className='registration__ask'>Уже есть аккаунт на Dashboard?</div>
          <NavLink to='/login' className='registration__redirect'>Войти</NavLink>
        </div>
      </form>
    </div>
  )
}


export default connect(null, {signUp})(Registration)