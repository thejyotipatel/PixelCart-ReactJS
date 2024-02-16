import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className='hidden md:block'>
        <div className='diff aspect-[10/2.5]   '>
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
