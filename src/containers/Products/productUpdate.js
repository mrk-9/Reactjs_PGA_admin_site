import React from 'react'
import { UpdatePage } from '../../components/Elements'
import { ProductQueries } from '../../queries'
import { formElements, transform, required, initialValues } from './helpers'

const { updateProduct, productDetail } = ProductQueries

export default (props) => (
  <UpdatePage
    title='Update Product'
    query={productDetail}
    update={updateProduct}
    formElements={formElements}
    initialValues={initialValues}
    required={required}
    transform={transform}
    updateKey='product'
    dataKey='products'
    {...props}
  />
)
