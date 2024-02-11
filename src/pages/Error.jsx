import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8 '>
        <img src='/404-page.svg' alt='404-page' className='max-w-[50%]' />

        <div className='text-center'>
          <p className='mt-2 font-bold tracking-tight  '>{error.data}</p>
          <p className='mt-1 text-lg leading-7 '>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-10 '>
            <Link to='/' className='btn btn-primary  '>
              Go back home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      <main className='grid min-h-[100vh] place-items-center px-8 '>
        <div className='text-center'>
          <p className='mt-2 font-bold tracking-tight  '>{error.data}</p>
          <p className='mt-1 text-lg leading-7 '>there was an error...</p>
        </div>
      </main>
    </>
  )
}
export default Error
