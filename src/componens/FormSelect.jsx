const FormSelect = ({ name, label, list, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label capitalize'>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className={`select select-borderd ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default FormSelect
