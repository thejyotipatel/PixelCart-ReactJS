import { FormInput, SubmitBtn } from '../componens'
import { Form, Link, redirect } from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await customFetch.post('/auth/local/register', data)

    toast.success('Account created successfully')
    return redirect('/login')
  } catch (error) {
    console.log(error)
    const errorMessage =
      error?.response?.data?.error?.message ||
      'Please double check your credentials'
    toast.error(errorMessage)

    return null
  }
}
const Register = () => {
  return (
    <>
      <section className='h-screen grid place-items-center'>
        <Form
          method='POST'
          className='card w-96 p-4 bg-base-100 shadow-md flex flex-col gap-2'
        >
          <h4 className='text-center text-3xl font-bold capitalize'>
            register
          </h4>
          <FormInput type='text' label='username' name='username' />
          <FormInput type='email' label='email' name='email' />
          <FormInput type='password' label='password' name='password' />
          <div className='mt-4'>
            <SubmitBtn text='register' />
          </div>

          <p className='text-center'>
            Already a member?
            <Link
              to='/login'
              className='ml-2 link link-hover link-primary capitalize'
            >
              login
            </Link>
          </p>
        </Form>
      </section>
    </>
  )
}
export default Register
