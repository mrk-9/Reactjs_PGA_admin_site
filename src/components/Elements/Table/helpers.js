import React from 'react'
import styled, { withTheme } from 'styled-components'
import BaseInput from '../Forms/BaseInput'
import ReactTable from 'react-table'
import { tableProps } from './common'
import { defaultSorted } from './columnHelpers'

export const Layout = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-end
`

export const FilterInput = styled(BaseInput)`
  width: 25%
`

export const getTableSize = (data, limitSize) => {
  return (limitSize && data.length > limitSize) ? limitSize : data.length
}

export const Table = withTheme(({ data, ...rest }) => (
  <ReactTable
    data={data}
    defaultSorted={defaultSorted}
    defaultPageSize={getTableSize(data, rest.limitSize)} {...tableProps(rest)}
  />
))
