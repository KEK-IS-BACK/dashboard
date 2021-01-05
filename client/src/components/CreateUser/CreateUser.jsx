import './CreateUser.scss'
import {useState} from "react";

const CreateUser = props => {
  const {createUser} = props

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
  }

  return (
    <div className='createUser'>
      <form onSubmit={submitHandler}>
        <div className='createUser__body'>
          <label>
            ФИО:
            <input type="text"
                   placeholder='Иванов Иван Иванович'
                   name='fullName'
                   value={form.fullName}
                   onChange={onChangeHandler}
            />
          </label>
          <label>
            О себе:
            <textarea placeholder='Например, "Ответственный и жизнерадостный :)"'
                      name='aboutMe'
                      value={form.aboutMe}
                      onChange={onChangeHandler}/>
          </label>
          <label>
            Номер телефона:
            <input type="text"
                   placeholder='88005353535'
                   name='phone'
                   value={form.phone}
                   onChange={onChangeHandler}/>
          </label>
          <label>
            Место проживания
            <input type="text"
                   placeholder='Россия, г.Орел'
                   name='place'
                   value={form.place}
                   onChange={onChangeHandler}
            />
          </label>
          <button type='submit'>Создать пользователя</button>
          <button type='button' onClick={() => setForm({
            fullName: '',
            aboutMe: '',
            phone: '',
            place: ''
          })}>Очистить поля
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser