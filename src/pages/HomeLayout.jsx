import { Outlet, useNavigation } from 'react-router-dom'
import { Footer, Header, Hero, Navbar, Loading } from '../componens'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <section className='align-contaner pt-6'>
            <Outlet />
          </section>
          <Footer />
        </>
      )}
    </>
  )
}
export default HomeLayout
