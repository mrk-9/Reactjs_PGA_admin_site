import React from 'react'
import { gql } from 'apollo-boost'
import { mountWithTheme, withApollo } from '../../../../utils/testutil'
import CreatePage from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

const query = gql`
  mutation Test($input: Input!) {
    test(input: $input) {
      id
      name
    }
  }
`

describe('Create Page', () => {
  it('should render correctly', () => {
    const Render = withApollo((props) => <CreatePage required={[]} initialValues={{}} formElements={[]} mutation={query} {...props} />)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
