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
    // console.log(`${pathname}?${searchParams.toString()}`)
  }

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs sm:btn-md  border-none join-item ${
          activeClass ? 'bg-base-300 border-base-300' : ''
        }  `}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    )
  }

  const renderPageButton = () => {
    const pageButton = []
    // FIRST BUTTON
    pageButton.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }))

    // DOT BUTTON
    if (page > 2) {
      pageButton.push(
        <button className='join-item btn btn-xs sm:btn-md' key='dots-1'>
          ...
        </button>
      )
    }

    // ACTIVE BUTTON
    if (page !== 1 && page !== pageCount) {
      pageButton.push(addPageButton({ pageNumber: page, activeClass: true }))
    }

    // DOT BUTTON
    if (page < pageCount - 1) {
      pageButton.push(
        <button className='join-item btn btn-xs sm:btn-md' key='dots-2'>
          ...
        </button>
      )
    }
    // LAST BUTTON
    pageButton.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    )
    return pageButton
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

          {renderPageButton()}

          <button
            className='btn btn-xs sm:btn-md join-item'
            onClick={() => {
              let nextPage = page + 1
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
