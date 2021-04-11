import './styles.css'

const Button = ({ label, type, variant, onClick }) => {

  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`custom-button ${variant}`}
    > { label } </button>
  )
}

export default Button