import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils/index'
import { ComplexPagination, OrdersList, SectionTitle } from '../componens'

const ordersQuery = (parems, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      parems.page ? parseInt(parems.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        parems,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  }
}

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user

    if (!user) {
      toast.warn('You must logged in to view orders')
      return redirect('/login')
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      )

      return {
        orders: response.data.data,
        meta: response.data.meta,
      }
    } catch (error) {
      console.log(error)
      const errorMessage =
        error?.response?.data?.error?.message ||
        'There was an error placing your order'
      toast.error(errorMessage)

      // WHEAN TOKEN HAS PROBLEM
      if (error?.response?.status === 401) return redirect('/login')

      return null
    }
  }

const Orders = () => {
  const { meta } = useLoaderData()
  if (meta.pagination.total < 1) {
    return <SectionTitle text='Pleace make an order' />
  }
  return (
    <>
      <SectionTitle text='Your order' />
      <OrdersList />
      <ComplexPagination />
    </>
  )
}
export default Orders
