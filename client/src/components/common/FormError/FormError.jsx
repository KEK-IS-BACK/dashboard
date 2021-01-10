import './FormError.scss'

const FormError = props => {
  const {text, className} = props

  return (
    <div className={`formError ${className}`}>
      {text}
    </div>
  )
}

export default FormError