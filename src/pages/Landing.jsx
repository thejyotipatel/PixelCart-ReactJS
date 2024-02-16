import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <div className='hero-content text-center  md:hidden grid'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold tracking-tight  '>
            Discover, Shop, Save
          </h1>
          <p className='py-8 text-lg leading-8'>
            Welcome to Pixel Cart - Your Ultimate Destination for Online
            Shopping Bliss! Discover a World of Trendy Fashion, Irresistible
            Deals, and Unmatched Convenience. Start Exploring Now!
          </p>
          <div className='mt-10'>
            <Link to='/products' className='btn btn-primary uppercase'>
              Our Products
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Landing
