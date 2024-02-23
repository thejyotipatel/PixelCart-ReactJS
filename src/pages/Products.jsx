import { Filters, PaginationContainer, ProductsContainer } from '../componens'
import { customFetch } from '../utils'

const url = '/products'

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  // console.log(params)
  const response = await customFetch(url, { params })
  const products = response.data.data
  const meta = response.data.meta
  // console.log(products, meta)
  return { products, meta, params }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}
export default Products
