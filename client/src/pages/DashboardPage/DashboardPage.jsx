import './DashboardPage.scss'
import ApiCard from "../../components/ApiCard/ApiCard";
import {getApiCards} from "../../redux/selectors";
import {connect} from 'react-redux'
import {setApiResult} from "../../redux/apiCardsRedecer";

const DashboardPage = props => {
  let {cards, setApiResult} = props

  const cardsElements = cards.map((card, index) => <ApiCard key={index} {...card} setApiResult={setApiResult}/>)

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
  cards: getApiCards(state)
})

export default connect(mapStateToProps, {setApiResult})(DashboardPage)