import { useSelector } from 'react-redux'
import { formetPrice } from '../utils/index'
const CartTotal = () => {
  const { text, cartTotal, shipping, tex, orderTotal } = useSelector(
    (state) => state.cartState
  )
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-medium'>{formetPrice(cartTotal)}</span>
        </p>

        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>{formetPrice(shipping)}</span>
        </p>

        {/* TAX */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Tex</span>
          <span className='font-medium'>{formetPrice(tex)}</span>
        </p>

        {/* ORDER TOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Order Total</span>
          <span className='font-medium'>{formetPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}
export default CartTotal
