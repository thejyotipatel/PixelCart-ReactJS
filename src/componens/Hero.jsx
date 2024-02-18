import { Link } from 'react-router-dom'

export const HeroInfo = () => {
  return (
    <div className='hero-content text-center  md:hidden grid'>
      <div className='max-w-md'>
        <h1 className='text-5xl font-bold tracking-tight  '>
          Discover, Shop, Save
        </h1>
        <p className='py-8 text-lg leading-8'>
          Welcome to Pixel Cart - Your Ultimate Destination for Online Shopping
          Bliss! Discover a World of Trendy Fashion, Irresistible Deals, and
          Unmatched Convenience. Start Exploring Now!
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary uppercase'>
            Our Products
          </Link>
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <>
      <div className='hidden md:block'>
        <div className='diff aspect-[10/2.5]'>
          <div className='diff-item-1'>
            <div className='bg-primary text-primary-content text-9xl font-black grid place-content-center uppercase'>
              Pixel Cart
            </div>
          </div>
          <div className='diff-item-2'>
            <div className='bg-base-200 text-9xl font-black grid place-content-center uppercase'>
              Pixel Cart
            </div>
          </div>
          <div className='diff-resizer'></div>
        </div>
      </div>
    </>
  )
}
export default Hero
