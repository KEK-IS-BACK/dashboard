import './Quote.scss'

const Quote = props => {
  const {pair, value} = props
  return (
    <div className='quote'>
      <div className='quote__pair'>{pair}</div>
      <div className='quote__value'>{value}</div>
    </div>
  )
}

export default Quote