import { FormInput, SubmitBtn } from '../componens'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className='h-screen grid place-items-center'>
        <Form
          method='post'
          className='card w-96 p-4 bg-base-100 shadow-md flex flex-col gap-2'
        >
          <h4 className='text-center text-3xl font-bold'>Login</h4>
          <FormInput
            type='email'
            label='email'
            name='identifier'
            defaultValue='test@test.com'
          />
          <FormInput
            type='password'
            label='password'
            name='password'
            defaultValue='test'
          />
          <div className='mt-4'>
            <SubmitBtn text='login' />
          </div>
          <button className='btn btn-secondary uppercase '>guest user</button>
          <p className='text-center'>
            Not a member yet?
            <Link
              to='/register'
              className='ml-2 link link-hover link-primary capitalize'
            >
              register
            </Link>
          </p>
        </Form>
      </section>
    </>
  )
}
export default Login
