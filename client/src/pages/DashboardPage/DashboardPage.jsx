import './DashboardPage.scss'
import ApiCard from "../../components/ApiCard/ApiCard";

const DashboardPage = props => {
  // let {cards} = props

  const cards = [
    {
      title: 'Youtube',
      description: 'После нажатия на карточку получаешь набор случайных видео',
      link: '/somewhere',
      img: null
    }, {
      title: 'Youtube',
      description: 'После нажатия на карточку получаешь набор случайных видео',
      link: '/somewhere',
      img: null
    }, {
      title: 'Youtube',
      description: 'После нажатия на карточку получаешь набор случайных видео',
      link: '/somewhere',
      img: null
    }
  ]

  const cardsElements = cards.map((card, index) => <ApiCard key={index} {...card}/>)

  return (
    <div className='dashboardPage'>
      <div className="container">
        <h1 className='dashboardPage__title'>Dashboard Page</h1>
        <div className='dashboardPage__cards'>
          {cardsElements}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage