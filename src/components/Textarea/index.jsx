import './styles.css'
import { forwardRef } from 'react'

const Textarea = forwardRef(({ id, name, placeholder, defaultValue, onChange, rows, label }, ref) => {

  return (
    <>
      {
        label && label.trim().length &&
        <p className="textarea-label"> { label } </p>
      }

      <textarea
        className="custom-textarea"
        id={id}
        rows={rows || 2}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue || ''}
        onChange={(event) => onChange(event.target.value)}
        ref={ref}
      />
    </>
  )
}) 

export default Textarea