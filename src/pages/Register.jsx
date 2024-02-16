import { FormInput, SubmitBtn } from '../componens'
import { Form, Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <section className='h-screen grid place-items-center'>
        <Form
          method='post'
          className='card w-96 p-4 bg-base-100 shadow-md flex flex-col gap-2'
        >
          <h4 className='text-center text-3xl font-bold capitalize'>
            register
          </h4>
          <FormInput
            type='text'
            label='username'
            name='username'
            defaultValue='username'
          />
          <FormInput type='email' label='email' name='email' />
          <FormInput type='password' label='password' name='password' />
          <div className='mt-4'>
            <SubmitBtn text='register' />
          </div>
          <button className='btn btn-secondary uppercase '>guest user</button>
          <p className='text-center'>
            Already a member?
            <Link
              to='login'
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
