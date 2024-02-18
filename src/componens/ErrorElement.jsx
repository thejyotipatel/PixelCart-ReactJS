import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()

  return (
    <main className='grid min-h-[100vh] place-items-center px-6 '>
      <div className='text-center'>
        <p className='mt-2 font-bold tracking-tight  '>{error.data}</p>
        <p className=' text-2xl leading-7 '>there was an error...</p>
      </div>
    </main>
  )
}
export default ErrorElement
