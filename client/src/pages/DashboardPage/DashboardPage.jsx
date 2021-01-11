import './DashboardPage.scss'
import ApiCard from "../../components/ApiCard/ApiCard";
import {getActiveUser, getCurrentApiCards} from "../../redux/selectors";
import {connect} from 'react-redux'
import {setActiveApiCard} from "../../redux/apiCardsRedecer";
import Preloader from "../../components/common/Preloader/Preloader";

const DashboardPage = props => {
  let {cards, setActiveApiCard, activeUser} = props

  const cardsElements = cards.map((card, index) => <ApiCard key={index}
                                                            {...card}
                                                            setActiveApiCard={setActiveApiCard}
                                                            index={index}/>)

  if (!cards) return <Preloader/>

  return (
    <div className='dashboardPage'>
      <div className="container">
        <h1 className='title dashboardPage__title'>Dashboard Page</h1>
        {
          !activeUser
            ? <div>Выберите пользователя</div>
            : <div className='dashboardPage__cards'>
              {cardsElements}
            </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cards: getCurrentApiCards(state),
  activeUser: getActiveUser(state)
})

export default connect(mapStateToProps, {setActiveApiCard})(DashboardPage)