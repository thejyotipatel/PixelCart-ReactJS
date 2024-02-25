import { NavLink } from 'react-router-dom'
import { HiMoon, HiOutlineMenuAlt2, HiSun } from 'react-icons/hi'
import { FiShoppingCart } from 'react-icons/fi'
import NavLinks from './NavLinks'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../featureds/user/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  // ITEM NUMBER IN CART
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCarts)
  return (
    <>
      <nav className='bg-base-200'>
        <div className='navbar align-contaner'>
          <div className='flex-1'>
            {/* logo */}
            <NavLink to='/' className=' hidden  md:flex  p-0 items-center    '>
              <div className='  stats bg-primary shadow  '>
                <div className='stat px-3 py-2'>
                  <div className='stat-title text-primary-content text-3xl font-bold p-0 '>
                    PC
                  </div>
                </div>
              </div>
            </NavLink>

            {/* mobile menu */}
            <div className='dropdown md:hidden'>
              <label tabIndex={0} role='button' className='btn btn-ghost   '>
                <HiOutlineMenuAlt2 className='text-3xl h-7 w-7 ' />
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex'
              >
                <NavLinks />
              </ul>
            </div>
          </div>

          {/* desktop menu */}
          <div className='navbar-center hidden  md:flex'>
            <ul className='menu menu-horizontal gap-2'>
              <NavLinks />
            </ul>
          </div>

          <div className='flex-none'>
            {/* theam */}
            <label className='swap swap-rotate ml-4'>
              <input type='checkbox' onChange={handleTheme} />

              {/* sun */}
              <HiSun className='swap-on h-6 w-6' />
              {/* moon */}
              <HiMoon className='swap-off h-6 w-6' />
            </label>

            {/* cart */}
            <NavLink
              to='/cart'
              className='btn btn-ghost btn-circle btn-md ml-4'
            >
              <div className='indicator'>
                <FiShoppingCart className='h-6 w-6 ' />
                <span className='badge badge-primary badge-md indicator-item'>
                  {numItemsInCart}
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
