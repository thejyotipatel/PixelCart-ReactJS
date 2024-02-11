const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <label className='form-control w-full max-w-xs'>
      <div className='label'>
        <span className='label-text capitalize '>{label}</span>
      </div>
      <input
        type={type}
        placeholder='Type here'
        className='input input-bordered input-primary w-full max-w-xs'
        name={name}
        defaultValue={defaultValue}
      />
    </label>
  )
}
export default FormInput
