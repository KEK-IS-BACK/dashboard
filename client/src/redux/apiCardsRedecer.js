import weatherIcon from '../assets/img/svg/weather_icon.svg'
import dogIcon from '../assets/img/svg/dog_icon.svg'
import catIcon from '../assets/img/svg/cat_icon.svg'
import foxIcon from '../assets/img/svg/fox_icon.svg'
import calendarIcon from '../assets/img/svg/calendar_icon.svg'
import moneyIcon from '../assets/img/svg/money_icon.svg'

const SET_API_RESULT = 'dashboard/apiCardsReducer/SET_API_RESULT'

const initialState = {
  apiCards: [
    {
      title: 'Погода',
      description: 'Данное API позволяет узнать текущую погоду в Красоярске',
      imgPath: weatherIcon,
      httpRequest: 'http://api.weatherstack.com/current?access_key=58dd405a39fe02174618057b496b1dac&query=krasnoyarsk'
    }, {
      title: 'Случайная картинка собаки',
      description: 'Данное API позволяет получить случайную картинку собаки',
       imgPath: dogIcon,
      httpRequest: 'https://random.dog/woof.json'
    }, {
      title: 'Случайная картинка кошки',
      description: 'Данное API позволяет получить случайную картинку кошки',
       imgPath: catIcon,
      httpRequest: 'https://aws.random.cat/meow'
    }, {
      title: 'Случайная картинка лисы',
      description: 'Данное API позволяет получить случайную картинку лисы',
       imgPath: foxIcon,
      httpRequest: 'https://randomfox.ca/floof/'
    }, {
      title: 'Праздники в России',
      description: 'Данное API позволяет получить список праздников в РФ на 2021 год',
       imgPath: calendarIcon,
      httpRequest: 'https://calendarific.com/api/v2/holidays?&api_key=e899f5fbb869caeaaadd02199416c62e66e44aec&country=ru&year=2021'
    }, {
      title: 'Валютные курсы',
      description: 'Данное API позволяет узнать текущие валютные курсы',
       imgPath: moneyIcon,
      httpRequest: 'http://api.currencylayer.com/live?access_key=8c1335781dff0b3858bbc054ba0f9ac3&format=1'
    }
  ],
  apiResult: null
}

const apiCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_API_RESULT:
      return {
        ...state,
        apiResult: action.data
      }
    default :
      return state
  }
}


export const setApiResult = (data) => ({type: SET_API_RESULT, data})

export default apiCardsReducer