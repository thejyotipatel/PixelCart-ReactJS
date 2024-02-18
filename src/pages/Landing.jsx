import Hero, { HeroInfo } from '../componens/Hero'
import { customFetch } from '../utils'
import { FeaturedProducts } from '../componens'
const url = '/products?featured=true'

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data
  // console.log(response)
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />

      <HeroInfo />

      {/* featured */}

      <FeaturedProducts />
    </>
  )
}
export default Landing
