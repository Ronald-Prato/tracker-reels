import './styles.css'
import { forwardRef } from 'react'

const Input = forwardRef(({ id, name, placeholder, defaultValue, onChange, label }, ref) => {

  return (
    <>
      {
        label && label.trim().length > 0 &&
        <p className="input-label"> { label } </p>
      }

      <input
        className="custom-input"
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue || ''}
        onChange={(event) => onChange(event.target.value)}
        ref={ref}
      />
    </>
  )
}) 

export default Input