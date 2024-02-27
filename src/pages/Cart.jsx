import { useSelector } from 'react-redux'
import { SectionTitle, CartTotal, CartItemList } from '../componens'
import { Link } from 'react-router-dom'
const Cart = () => {
  // user
  const user = useSelector((state) => state.userState.user)
  const numItemInCart = useSelector((state) => state.cartState.numItemsInCarts)

  if (numItemInCart === 0) {
    return <SectionTitle text='Your cart is empty' />
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />

      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotal />

          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link
              to='/login'
              className='btn btn-primary btn-block mt-8 uppercase'
            >
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
export default Cart
