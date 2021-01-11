import weatherIcon from '../assets/img/svg/weather_icon.svg'
import dogIcon from '../assets/img/svg/dog_icon.svg'
import catIcon from '../assets/img/svg/cat_icon.svg'
import foxIcon from '../assets/img/svg/fox_icon.svg'
import calendarIcon from '../assets/img/svg/calendar_icon.svg'
import moneyIcon from '../assets/img/svg/money_icon.svg'
import axios from "axios";

const SET_API_RESULT = 'dashboard/apiCardsReducer/SET_API_RESULT'
const SET_API_CARDS = 'dashboard/apiCardsReducer/SET_API_CARDS'
const SET_ACTIVE_API_CARD = 'dashboard/apiCardsReducer/SET_ACTIVE_API_CARD'


const initialState = {
  allApiCards: [
    {
      id: 0,
      title: 'Погода',
      description: 'Данное API позволяет узнать текущую погоду в Красоярске',
      imgPath: weatherIcon,
      httpRequest: 'http://api.weatherstack.com/current?access_key=58dd405a39fe02174618057b496b1dac&query=krasnoyarsk',
      component: 'weatherApi'
    }, {
      id: 1,
      title: 'Случайное фото или видео собаки',
      description: 'Данное API позволяет получить случайное фото или видео с собакой',
      imgPath: dogIcon,
      httpRequest: 'https://random.dog/woof.json',
      component: 'randomDogApi'
    }, {
      id: 2,
      title: 'Случайная картинка кошки',
      description: 'Данное API позволяет получить случайную картинку кошки',
      imgPath: catIcon,
      httpRequest: 'https://aws.random.cat/meow',
      component: 'randomCatApi'
    }, {
      id: 3,
      title: 'Случайная картинка лисы',
      description: 'Данное API позволяет получить случайную картинку лисы',
      imgPath: foxIcon,
      httpRequest: 'https://randomfox.ca/floof/',
      component: 'randomFoxApi'
    }, {
      id: 4,
      title: 'Праздники в России',
      description: 'Данное API позволяет получить список праздников в РФ на 2021 год',
      imgPath: calendarIcon,
      httpRequest: 'https://calendarific.com/api/v2/holidays?&api_key=e899f5fbb869caeaaadd02199416c62e66e44aec&country=ru&year=2021',
      component: 'holidaysApi'
    }, {
      id: 5,
      title: 'Валютные курсы',
      description: 'Данное API позволяет узнать текущие валютные курсы',
      imgPath: moneyIcon,
      httpRequest: 'http://api.currencylayer.com/live?access_key=8c1335781dff0b3858bbc054ba0f9ac3&format=1',
      component: 'currencyApi'
    }
  ],
  currentApiCards: [],
  apiResult: null,
  activeApiCard: {}
}

const apiCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_API_CARDS:
      return {
        ...state,
        currentApiCards: [...action.cards]
      }
    case SET_API_RESULT:
      return {
        ...state,
        apiResult: action.data
      }
    case SET_ACTIVE_API_CARD:
      const stateCopy = {...state}
      const apiCard = stateCopy.allApiCards.find(item => item.id === action.id)

      return {
        ...state,
        activeApiCard: apiCard
      }
    default :
      return state
  }
}

export const setApiCards = cards => ({type: SET_API_CARDS, cards})
export const setApiResult = data => ({type: SET_API_RESULT, data})
export const setActiveApiCard = id => ({type: SET_ACTIVE_API_CARD, id})

export const makeApiRequest = httpRequest => async dispatch => {
  try {
    setApiResult(null)
    const response = await axios.get(httpRequest)

    dispatch(setApiResult(response.data))
  } catch (e) {}

}
export const selectRandomApiCards = () => (dispatch, getState) => {
  const state = getState()

  let indexes = [] // Массив индексов нужен для исключения повторений
  let randomApiCards = []

  for (let i = 0; i < 3; i++) { // Генерирует три случайных числа

    let randIndex = Math.floor(Math.random() * ((state.apiCards.allApiCards.length - 1) + 1)); // Рандомное число от 0 до "количество карточек"

    if (indexes.indexOf(randIndex) === -1) {
      indexes.push(randIndex)
      randomApiCards.push(state.apiCards.allApiCards[randIndex])
    } else {
      i-- // Повторить попытку если такой index уже был
    }
  }


  dispatch(setApiCards(randomApiCards))
}

export default apiCardsReducer