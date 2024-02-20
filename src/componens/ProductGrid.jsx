import { Link, useLoaderData } from 'react-router-dom'
import { formetPrice } from '../utils/index'

const ProductGrid = () => {
  const { products } = useLoaderData()
  return (
    <>
      <div className=' pb-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-content-center'>
        {products.map((items) => {
          const { title, price, image } = items.attributes
          const ruppesPrice = formetPrice(price)
          return (
            <Link
              key={items.id}
              to={`/products/${items.id}`}
              className='card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition duration-200'
            >
              <figure className='px-8 pt-8'>
                <img
                  src={image}
                  alt={title}
                  className='rounded-xl h-64 md:h-48 w-full object-cover'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title capitalize tracking-wider'>
                  {title}
                </h2>
                <span className='font-bold text-primary'>{ruppesPrice}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
export default ProductGrid
