const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control  '>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        placeholder='Type here'
        className={`input input-bordered ${size}`}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  )
}
export default FormInput
