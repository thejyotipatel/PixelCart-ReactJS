import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const PaginationContainer = () => {
  const { meta } = useLoaderData()
  const { pageCount, page } = meta.pagination

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })

  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
    // console.log(`${pathname}?${searchParams.toString()}`)
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

          {pages.map((pageNumber) => {
            return (
              <button
                key={pageNumber}
                className={`btn btn-xs sm:btn-md  border-none ${
                  pageNumber === page
                    ? 'bg-primary text-neutral-content hover:text-neutral '
                    : ''
                } join-item`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          })}

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
export default PaginationContainer
