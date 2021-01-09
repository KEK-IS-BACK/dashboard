import './DashboardPage.scss'
import ApiCard from "../../components/ApiCard/ApiCard";
import {getActiveUser, getCurrentApiCards} from "../../redux/selectors";
import {connect} from 'react-redux'
import {setCurrentApi} from "../../redux/apiCardsRedecer";
import Preloader from "../../components/common/Preloader/Preloader";

const DashboardPage = props => {
  let {cards, setCurrentApi, activeUser} = props


  const cardsElements = cards.map((card, index) => <ApiCard key={index}
                                                            {...card}
                                                            setCurrentApi={setCurrentApi}
                                                            index={index}/>)

  if (!activeUser) {
    return (
      <div className='dashboardPage'>
        <div className="container">
          Выберите пользователя
        </div>
      </div>)

  } else if (!cards) {
    return <Preloader/>
  }


  return (
    <div className='dashboardPage'>
      <div className="container">
        <h1 className='title dashboardPage__title'>Dashboard Page</h1>
        <div className='dashboardPage__cards'>
          {cardsElements}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cards: getCurrentApiCards(state),
  activeUser: getActiveUser(state)
})

export default connect(mapStateToProps, {setCurrentApi})(DashboardPage)