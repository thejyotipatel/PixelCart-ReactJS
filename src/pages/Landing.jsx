import Hero, { HeroInfo } from '../componens/Hero'
import { customFetch } from '../utils'
import { FeaturedProducts } from '../componens'

const url = '/products?featured=true'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  const products = response.data.data
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />

      <HeroInfo />

      {/* FEATURED */}
      <FeaturedProducts />
    </>
  )
}
export default Landing
