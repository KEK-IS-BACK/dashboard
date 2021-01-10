import {useState} from "react";
import './Login.scss'
import {NavLink} from "react-router-dom";
import {signIn} from "../../redux/authReducer";
import {connect} from 'react-redux'
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import FormError from "../common/FormError/FormError";

const Login = (props) => {
  const {signIn} = props

  const [message, setMessage] = useState()
  const [errors, setErrors] = useState()
  const [isLoading, setIsLoading] = useState(false)
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

  const submitHandler = async e => {
    e.preventDefault()
    setErrors(null)
    setMessage(null)
    setIsLoading(true)

    const data = await signIn(form.email, form.password)
    if(data && data.errors) setErrors(data.errors)
    if(data && data.message) setMessage(data.message)

    setIsLoading(false)
  }

  return (
    <div className='login'>
      <form onSubmit={submitHandler}>
        <div className='login__body'>
          <h1 className='login__title title'>Вход</h1>
          <Input type="text"
                 className='login__input'
                 placeholder='Email'
                 name='email'
                 value={form.email}
                 onChange={inputChangeHandler}/>
          <Input type="password"
                 className='login__input'
                 placeholder='Password'
                 name='password'
                 value={form.password}
                 onChange={inputChangeHandler}/>
          {
            errors &&
            <div className='login__errors'>
              {
                errors.map((error, i) =>
                  <FormError key={i}
                             text={error.msg}
                             className='login__error'/>)
              }
            </div>
          }
          {
            message && <div className='login__message'>{message}</div>
          }
          <Button type='submit'
                  value='Войти'
                  className='login__btnSubmit'
                  disabled={isLoading}/>
          <div className='login__ask'>Еще нет аккаунта на Dashboard?</div>
          <NavLink to='/registration' className='login__redirect'>Зарегестрироваться</NavLink>
        </div>
      </form>
    </div>
  )
}

export default connect(null, {signIn})(Login)