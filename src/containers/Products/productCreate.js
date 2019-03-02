import React from 'react'
import { CreatePage } from '../../components/Elements'
import { ProductQueries } from '../../queries'
import { formElements, required, initialValues } from './helpers'

const { createProduct, products } = ProductQueries

export default (props) => (
  <div>
    <CreatePage
      title='Create Product'
      formElements={formElements}
      initialValues={initialValues}
      required={required}
      mutation={createProduct}
      createKey='createProduct'
      dataKey='products'
      refetch={products}
      {...props}
    />
  </div>
)
