import { Outlet } from 'react-router-dom'
import { Header, Hero, Navbar } from '../componens'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <section className='align-contaner pt-6'>
        <Outlet />
      </section>
    </>
  )
}
export default HomeLayout
