import { gql } from 'apollo-boost'
import { shallow } from 'enzyme'
import { mountWithTheme, withApollo } from '../../../../utils/testutil'
import CreateForm, { handleSubmit, validate } from '../create'

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

describe('Create Page Form', () => {
  it('should render correctly', () => {
    const props = {
      required: [],
      initialValues: {},
      formElements: [],
      mutation: query,
      client: {
        mutate: () => Promise.resolve({ data: { toast: { } } }),
        query: () => Promise.resolve({ data: { toast: { } } })
      }
    }

    const mocks = [
      {
        request: {},
        result: { data: {} },
        error: new Error('error')
      }
    ]
    const Render = withApollo(CreateForm, props, mocks)
    const wrapper = mountWithTheme(Render, theme)
    const formWrapper = shallow(wrapper.instance().props.children)

    expect(wrapper.find('form').html()).toBeDefined()
    expect(formWrapper).toHaveLength(1)
    expect(wrapper).toHaveLength(1)
  })

  it('run handle submit', () => {
    const handleSubmitFn = handleSubmit({
      createKey: 'test',
      create: () => Promise.resolve({ data: { test: {} } }),
      history: { push: jest.fn() },
      client: { query: () => Promise.resolve({ data: { toast: { } } }) }
    })({}, { setSubmitting: jest.fn() })
    expect(handleSubmitFn).resolves.toBe(undefined)
  })

  it('run validate', () => {
    const validateFn = validate(['test'])({ test: false })
    expect(validateFn).toHaveProperty('test', 'test is Required')
  })
})
