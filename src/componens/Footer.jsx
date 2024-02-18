import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
      <ul className='grid grid-flow-col gap-4'>
        <NavLinks />
      </ul>

      <nav>
        <div className='grid grid-flow-col gap-2 text-lg'>
          Get code on Github-
          <Link
            to={'https://github.com/thejyotipatel/PixelCart-ReactJS'}
            className='text-primary font-bold'
          >
            @thejyotipatel
          </Link>
        </div>
      </nav>
    </footer>
  )
}
export default Footer
