import './Currency.scss'
import Quote from "./Quote/Quote";

const Currency = props => {
  const {quotes} = props.apiResult
  const quotesElements = Object.entries(quotes).map((quote, index) =>
    <Quote key={index} pair={quote[0]} value={quote[1]}/>)

  return (
    <div className='currency'>
      {quotesElements}
    </div>
  )
}

export default Currency