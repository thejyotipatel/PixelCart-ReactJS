import { Link, useLoaderData } from 'react-router-dom'
import { formetPrice } from '../utils/index'

const ProductLinst = () => {
  const { products } = useLoaderData()
  // console.log(products)
  return (
    <>
      <div className=' mt-12 grid gap-y-8'>
        {products.map((items) => {
          const { title, price, image, company } = items.attributes
          const ruppesPrice = formetPrice(price)
          return (
            <Link
              key={items.id}
              to={`/products/${items.id}`}
              className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
            >
              <img
                src={image}
                alt={title}
                className='rounded-lg h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
              />
              <div className='ml-0 sm:ml-16'>
                <h3 className='font-medium text-lg capitalize  '>{title}</h3>
                <h3 className='font-medium text-md capitalize text-neutral-content'>
                  {company}
                </h3>
              </div>
              <p className='font-medium ml-0 sm:ml-auto text-lg'>
                {ruppesPrice}
              </p>
            </Link>
          )
        })}
      </div>
    </>
  )
}
export default ProductLinst
