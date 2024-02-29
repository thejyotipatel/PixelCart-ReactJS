import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const ComplexPagination = () => {
  const { meta } = useLoaderData()
  const { pageCount, page } = meta.pagination

  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  const addPageButton = ({ pageNumber, activeClass }) => {
    console.log(activeClass)
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md  border-none join-item ${
          activeClass ? ' bg-base-300 border-base-300 ' : ''
        }`}
      >
        {pageNumber}
      </button>
    )
  }

  const randerPageButtons = () => {
    const pageButtons = []
    // FIRST BUTTON
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }))
    // LAST BUTTON
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    )
    return pageButtons
  }

  if (pageCount < 2) return null

  return (
    <>
      <div className='mt-16  mb-4 flex justify-end'>
        <div className='join'>
          <button
            className='btn btn-xs sm:btn-md join-item'
            onClick={() => {
              let prvPage = page - 1
              if (prvPage < 1) prvPage = pageCount
              handlePageChange(prvPage)
            }}
          >
            Prev
          </button>

          {randerPageButtons()}

          <button
            className='btn btn-xs sm:btn-md join-item'
            onClick={() => {
              let nextPage = page + 1
              console.log(nextPage)
              if (nextPage > pageCount) nextPage = 1
              handlePageChange(nextPage)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default ComplexPagination
