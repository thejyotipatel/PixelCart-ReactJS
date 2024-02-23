import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta, params } = useLoaderData()

  const { search, category, company, order, price, shapping } = params
  // console.log(meta)
  return (
    <>
      <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-8 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 item-center'>
        {/* SEARCH */}
        <FormInput
          type='search'
          label='search product'
          name='search'
          size='input-sm'
          defaultValue={search}
        />

        {/* CATEGORIES */}
        <FormSelect
          label='select category'
          name='category'
          list={meta.categories}
          size='select-sm'
          defaultValue={category}
        />

        {/* COMPONEY */}
        <FormSelect
          label='select company'
          name='company'
          list={meta.companies}
          size='select-sm'
          defaultValue={company}
        />

        {/* ORDER */}
        <FormSelect
          label='sort by'
          name='order'
          list={['a-z', 'z-a', 'high', 'low']}
          size='select-sm'
          defaultValue={order}
        />

        {/* PRICE RANGE */}
        <FormRange
          name='price'
          label='select price'
          size='range-xs'
          defaultValue={price}
        />

        {/* SHIPPING */}
        <FormCheckbox
          name='shipping'
          label='free shipping'
          size='checkbox-sm'
          defaultValue={shapping}
        />

        {/* BUTTONS */}
        <button type='submit' className='btn btn-primary btn-sm capitalize'>
          Search
        </button>
        <Link to='/products' className='btn btn-accent btn-sm capitalize'>
          Reset
        </Link>
      </Form>
    </>
  )
}
export default Filters
