import { gql } from 'apollo-boost'
import { shallow } from 'enzyme'
import { mountWithTheme, withApollo } from '../../../../utils/testutil'
import Delete from '../'
import DeletePage, { handleSubmit } from '../helper'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

const mutation = gql`
  mutation Test($input: ID!) {
    test(input: $input) {
      id
      name
    }
  }
`

const query = gql`
  {
    test {
      id
      name
    }
  }
`

describe('Delete Modal', () => {
  it('should render correctly', () => {
    const mocks = [{ request: { mutation } }, { request: { query } }]

    const props = {
      data: '',
      hideModal: jest.fn(),
      client: {}
    }
    const Render = withApollo(Delete, props, mocks)
    const wrapper = mountWithTheme(Render, theme)
    const innerWrapper = shallow(wrapper.instance().props.children)
    expect(wrapper).toHaveLength(1)
    expect(innerWrapper).toHaveLength(1)
  })
})

describe('Delete Page', () => {
  it('should render correctly', () => {
    const props = {
      refetch: query,
      mutation
    }
    const Render = withApollo(DeletePage, props)
    const wrapper = mountWithTheme(Render, theme)
    const innerWrapper = shallow(wrapper.instance().props.children)
    expect(wrapper).toHaveLength(1)
    expect(innerWrapper).toHaveLength(1)
  })

  it('should run handle submit', () => {
    const handleSubmitFn = handleSubmit(() => Promise.resolve({}), jest.fn(), '')()
    expect(handleSubmitFn).resolves.toBe(undefined)
  })
})
