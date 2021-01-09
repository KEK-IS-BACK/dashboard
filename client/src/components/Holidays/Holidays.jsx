import './Holidays.scss'
import Holiday from "./Holiday/Holiday";

const Holidays = props => {
  const {holidays} = props.apiResult.response
  const holidaysElements = holidays.map((item, index) => {
    return <Holiday key={index}
                    name={item.name}
                    description={item.description}
                    date={item.date.iso}
                    type={item.type}/>
  })

  console.log(holidays)
  return (
    <div className='holidays'>
      {holidaysElements}
    </div>
  )
}

export default Holidays