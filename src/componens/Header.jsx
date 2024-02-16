import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' bg-neutral  py-2 text-neutral-content'>
      <div className='align-contaner flex justify-center sm:justify-end'>
        <div className='flex gap-x-4 justify-center item-center  '>
          <Link to='/login' className='link link-hover text-xs sm:text-sm'>
            Sign in / Guest
          </Link>
          <Link to='/register' className='link link-hover text-xs sm:text-sm'>
            Create Acount
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
