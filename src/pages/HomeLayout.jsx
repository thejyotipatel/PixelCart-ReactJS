import { Outlet } from 'react-router-dom'
import { Footer, Header, Hero, Navbar } from '../componens'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Hero /> */}
      <section className='align-contaner pt-6'>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}
export default HomeLayout
