import React, {useEffect} from "react";
import Weather from "../../components/Weather/Weather";
import RandomDog from "../../components/RandomDog/RandomDog";
import RandomCat from "../../components/RandomCat/RandomCat";
import RandomFox from "../../components/RandomFox/RandomFox";
import Holidays from "../../components/Holidays/Holidays";
import Currency from "../../components/Currency/Currency";
import Preloader from "../../components/common/Preloader/Preloader";
import {connect} from "react-redux";
import {getApiResult, getActiveApiCard} from "../../redux/selectors";
import {makeApiRequest, setApiResult} from "../../redux/apiCardsRedecer";
import {Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import './DetailsPage.scss';


const DetailsPage = props => {
  const {apiResult, activeApiCard, makeApiRequest, setApiResult} = props

  useEffect(() => {
    if (activeApiCard && activeApiCard.httpRequest) {
      makeApiRequest(activeApiCard.httpRequest)
    }

    return () => {setApiResult(null)} // Чистит стейт после закрытия компоненты
  }, [activeApiCard, makeApiRequest, setApiResult])

  if (!apiResult) return <Preloader/>

  return (
    <div className='detailsPage'>
      <div className="container">
        <h1 className='title detailsPage__title'>Details Page</h1>
        <div className="detailsPage__body">
          <div className='detailsPage__apiInfo'>
            <div className='detailsPage__apiHeader'>
              <h2 className='detailsPage__apiTitle subtitle'>{activeApiCard.title}</h2>
              <img src={activeApiCard.imgPath} alt="Картинка api" className='detailsPage__apiImg'/>
            </div>
            <p className='detailsPage__apiDescription'>{activeApiCard.description}</p>
          </div>
          <Switch>
            <Route path='/details/weatherApi'><Weather apiResult={apiResult}/></Route>
            <Route path='/details/randomDogApi'><RandomDog apiResult={apiResult}/></Route>
            <Route path='/details/randomCatApi'><RandomCat apiResult={apiResult}/></Route>
            <Route path='/details/randomFoxApi'><RandomFox apiResult={apiResult}/></Route>
            <Route path='/details/holidaysApi'><Holidays apiResult={apiResult}/></Route>
            <Route path='/details/currencyApi'><Currency apiResult={apiResult}/></Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  apiResult: getApiResult(state),
  activeApiCard: getActiveApiCard(state)
})

export default compose(
  withRouter,
  connect(mapStateToProps, {makeApiRequest, setApiResult})
)(DetailsPage)