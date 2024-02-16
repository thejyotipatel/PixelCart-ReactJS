const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <label className='form-control  '>
      <div className='label'>
        <span className='label-text capitalize'>{label}</span>
      </div>
      <input
        type={type}
        placeholder='Type here'
        className='input input-bordered '
        name={name}
        defaultValue={defaultValue}
      />
    </label>
  )
}
export default FormInput
