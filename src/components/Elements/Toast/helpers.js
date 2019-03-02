import React, { Fragment } from 'react'
import { gql } from 'apollo-boost'
import { withTheme } from 'styled-components'
import JSONTree from 'react-json-tree'

const applyStyle = ({ colors }) => ({
  tree: {
    backgroundColor: 'none',
    fontWeight: 400
  },
  label: {
    color: `${colors.primary.black}`
  },
  valueText: {
    color: `${colors.primary.text}`
  },
  nestedNodeItemString: {
    color: `${colors.primary.text}`
  },
  arrowSign: {
    color: `${colors.primary.text}`
  }
})

export const Errors = ({ dataKey, error = {} }) => withTheme(({ theme }) => {
  const { networkError: { result: { errors = [] } = {} } = {} } = error
  return (
    <Fragment>
      <span>{`${dataKey} failed with the following errors:`}</span>
      <JSONTree data={errors} theme={applyStyle(theme)} hideRoot />
    </Fragment>
  )
})

export const getToast = gql`
  {
    toast @client {
      id
    }
  }
`

export const updateToast = gql`
  mutation UpdateToast($id: Int!) {
    updateToast(id: $id) @client
  }
`
