import './DetailsPage.scss';
import Preloader from "../../components/common/Preloader/Preloader";
import {connect} from "react-redux";
import {getApiResult} from "../../redux/selectors";

const DetailsPage = props => {
  const {apiResult} = props

  if(!apiResult) return <Preloader/>

  return (
    <div className='detailsPage'>
      <div className="container">
        <h1 className='title detailsPage__title'>Details Page</h1>
        <div className="detailsPage__body">
          {JSON.stringify(apiResult)}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  apiResult: getApiResult(state)
})

export default connect(mapStateToProps)(DetailsPage)