import ProductGrid from './ProductGrid'
import SectionTitle from './SectionTitle'

const FeaturedProducts = () => {
  return (
    <>
      <div className='pt-4'>
        <SectionTitle text='Featured Product' />

        <ProductGrid />
      </div>
    </>
  )
}
export default FeaturedProducts
