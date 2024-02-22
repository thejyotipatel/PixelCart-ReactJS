import { useState } from 'react'
import { formetPrice } from '../utils'

const FormRange = ({ label, name, size }) => {
  const step = 1000
  const maxPrice = 100000
  const [selectPrice, setSelectPrice] = useState(maxPrice)
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label curser-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{formetPrice(selectPrice)}</span>
      </label>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectPrice}
        step={step}
        onChange={(e) => setSelectPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className='wf-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max : {formetPrice(maxPrice)}</span>
      </div>
    </div>
  )
}
export default FormRange
