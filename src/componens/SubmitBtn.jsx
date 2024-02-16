import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <button className='btn btn-primary capitalize btn-block'>
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner text-primary'></span>
          loading...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}
export default SubmitBtn
