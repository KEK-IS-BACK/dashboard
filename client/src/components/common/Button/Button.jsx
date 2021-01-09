import './Button.scss'

const Button = props => {
  const {className, value, ...restProps} = props

  return (
    <button className={`button ${className || ''}`} {...restProps}>{value}</button>
  )
}

export default Button