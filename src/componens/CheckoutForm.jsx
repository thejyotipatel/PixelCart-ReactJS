import { Form, redirect } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { customFetch, formetPrice } from '../utils/index'
import { clearCart } from '../featureds/cart/cartSlice'
import { toast } from 'react-toastify'

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData()
    const { name, address } = Object.fromEntries(formData)

    const user = store.getState().userState.user
    const { cartItems, orderTotal, numItemsInCarts } =
      store.getState().cartState

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formetPrice(orderTotal),
      cartItems,
      numItemsInCart: numItemsInCarts,
    }

    try {
      const response = await customFetch.post(
        '/orders',
        {
          data: info,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )

      queryClient.removeQueries(['orders'])
      store.dispatch(clearCart())
      toast.success('Order placed successfully')
      return redirect('/orders')
    } catch (error) {
      console.log(error)
      const errorMessage =
        error?.response?.data?.error?.message ||
        'There was an error placing your order'
      toast.error(errorMessage)

      // WHEAN TOKEN HAS PROBLEM
      if (error?.response?.status === 401) {
        return redirect('/login')
      }
      return null
    }
  }
const CheckoutForm = () => {
  return (
    <>
      <Form method='POST' className='flex flex-col gap-y-4'>
        <h4 className='font-medium text-xl capitalize'>Shipping information</h4>

        <FormInput label='first name' name='name' type='text' />
        <FormInput label='address' name='address' type='text' />

        <div className='mt-4'>
          <SubmitBtn text='place your order' />
        </div>
      </Form>
    </>
  )
}
export default CheckoutForm
