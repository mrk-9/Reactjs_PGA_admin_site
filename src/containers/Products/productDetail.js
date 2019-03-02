import React from 'react'
import { DetailPage } from '../../components/Elements'
import { ProductQueries } from '../../queries'

const { productDetail } = ProductQueries

export default ({ match: { params }, ...rest }) => (
  <DetailPage query={productDetail} id={params.productId} dataKey='product' updateKey='products' {...rest} />
)
