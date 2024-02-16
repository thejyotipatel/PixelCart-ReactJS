import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../componens'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className='align-contaner pt-6'>
        <Outlet />
      </section>
    </>
  )
}
export default HomeLayout
