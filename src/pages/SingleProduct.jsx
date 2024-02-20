import { Link, useLoaderData } from 'react-router-dom'
import { customFetch, formetPrice } from '../utils'
import { useState } from 'react'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)
  return { product: response.data.data }
}

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { image, title, price, description, colors, company } =
    product.attributes
  const ruppesAmount = formetPrice(price)

  const [productColors, setProductColors] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }
  // console.log(product, ruppesAmount)
  // console.log(colors)
  return (
    <>
      <section>
        {/* breadcrumbs */}
        <div className='text-sm breadcrumbs mt-4 mb-8'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to={`/products/${product.id}`}>products/{product.id}</Link>
            </li>
          </ul>
        </div>

        {/* PRODUCT */}
        <div className='mt-6 grid gap-8 md:grid-cols-2 lg:gap-x-16 justify-items-center'>
          {/* IMAGE */}
          <img
            src={image}
            alt={title}
            className='w-96 h-96 object-cover rounded-md lg:w-full'
          />
          <div className=' '>
            <h1 className='capitalize text-3xl font-bold'>{title}</h1>
            <h4 className='text-xl   text-neutral-content font-bold mt-2'>
              {company}
            </h4>
            <p className='mt-3 text-xl font-bold text-primary'>
              {ruppesAmount}
            </p>
            <p className='mt-8 leading-8'>{description}</p>

            {/* COLORS */}
            <div className='mt-6'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                colors
              </h4>

              <div className='mt-2'>
                {colors.map((color, index) => {
                  return (
                    <button
                      key={index}
                      type='button'
                      className={`badge w-6 h-6 mr-2 ${
                        color === productColors && 'border-2 border-neutral-600'
                      } `}
                      style={{ backgroundColor: color }}
                      onClick={() => setProductColors(color)}
                    ></button>
                  )
                })}
              </div>
            </div>

            {/* AMOUNT */}
            <div className='form-control w-full  max-w-xs'>
              <label htmlFor='amount' className='label'>
                <span className='label-text'>Amount</span>
              </label>
              <select
                className='select select-bordered select-sm'
                id='amount'
                value={amount}
                onChange={handleAmount}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            {/* CART BTN */}
            <div className='my-10'>
              <button className='btn btn-primary btn-md '>Add to bag</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default SingleProduct
