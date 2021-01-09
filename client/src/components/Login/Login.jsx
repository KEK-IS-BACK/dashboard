import {useState} from "react";
import './Login.scss'
import {NavLink} from "react-router-dom";
import {signIn} from "../../redux/authReducer";
import {connect} from 'react-redux'
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

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
          <Button type='submit' value='Войти' className='login__btnSubmit'/>
          <div className='login__ask'>Еще нет аккаунта на Dashboard?</div>
          <NavLink to='/registration' className='login__redirect'>Зарегестрироваться</NavLink>

        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {signIn})(Login)