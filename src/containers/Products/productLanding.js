import React from 'react'
import { LandingPage } from '../../components/Elements'
import { ProductQueries } from '../../queries'
import { productColumn } from './helpers'

const { products, deleteProduct } = ProductQueries

export const handleRowSelection = ({ history }) => (row, original) => {
  const id = original.id
  history.push(`/products/${id}`)
}

export default (props) => (
  <LandingPage
    title='Products'
    titleKey='Product Name'
    query={products}
    mutation={deleteProduct}
    columns={productColumn}
    dataKey='products'
    tableLimitSize={10}
    onSelectRow={handleRowSelection}
    hasCreate
    editableColumn={{canDelete: true, canEdit: true}}
    {...props}
  />
)
