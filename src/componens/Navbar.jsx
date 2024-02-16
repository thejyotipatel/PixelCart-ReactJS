import { NavLink } from 'react-router-dom'
import { HiMoon, HiOutlineMenuAlt2, HiSun } from 'react-icons/hi'
import { FiShoppingCart } from 'react-icons/fi'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'

const themes = {
  fantasy: 'fantasy',
  dark: 'dark',
}
const getThemeLocalStorage = localStorage.getItem('theme') || themes.fantasy

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeLocalStorage)
  const handleTheme = () => {
    const newTheme = theme === themes.dark ? themes.fantasy : themes.dark
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <>
      <nav className='bg-base-200'>
        <div className='navbar align-contaner'>
          <div className='flex-1'>
            {/* logo */}
            <NavLink to='/' className='hidden  md:flex   items-center'>
              <img src='/favicon.ico' alt='pc' />
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
                  4
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
