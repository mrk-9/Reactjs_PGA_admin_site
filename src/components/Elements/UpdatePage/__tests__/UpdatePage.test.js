import React from 'react'
import { gql } from 'apollo-boost'
import { shallow } from 'enzyme'
import { mountWithTheme, withApollo } from '../../../../utils/testutil'
import UpdatePage from '../'
import Update, { handleSubmit, validate } from '../update'
import { getInitialValuesFromData, UpdatePage404, UpdatePageQuery, omit, sanitize } from '../helper'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

const query = gql`{
  test
}
`
const mutation = gql`
  mutation Test($input: Input!) {
    test(input: $input) {
      id
      name
    }
  }
`
describe('Update Page', () => {
  it('should render correctly', () => {
    const props = {
      required: [],
      initialValues: {},
      formElements: [],
      update: mutation,
      query,
      location: { state: { id: '1' } }
    }

    const mocks = [
      {
        request: {},
        result: { data: {} },
        error: new Error('error')
      }
    ]
    const Render = withApollo(UpdatePage, props, mocks)
    const wrapper = mountWithTheme(Render, theme)
    const instance = wrapper.instance().props.children
    const innerWrapper = shallow(instance)
    expect(wrapper).toHaveLength(1)
    expect(innerWrapper).toHaveLength(1)
  })
})

describe('Update Page Query', () => {
  it('should render correctly', () => {
    const props = {
      required: ['id'],
      initialValues: {id: ''},
      formElements: [],
      transform: {},
      update: mutation,
      query,
      id: '1',
      updateKey: 'test'
    }

    const mocks = [
      {
        request: {},
        result: { data: { test: {} } },
        error: new Error('error')
      }
    ]
    const Render = withApollo(UpdatePageQuery, props, mocks)
    const wrapper = mountWithTheme(Render, theme)
    const instance = wrapper.instance().props.children
    const innerWrapper = shallow(instance)
    expect(wrapper).toHaveLength(1)
    expect(innerWrapper).toHaveLength(1)
  })
})

describe('Update Page Form', () => {
  it('should render correctly', () => {
    const props = {
      required: [],
      initialValues: {},
      formElements: [],
      mutation,
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
    const Render = withApollo(Update, props, mocks)
    const wrapper = mountWithTheme(Render, theme)
    const formWrapper = shallow(wrapper.instance().props.children)

    expect(wrapper.find('form').html()).toBeDefined()
    expect(formWrapper).toHaveLength(1)
    expect(wrapper).toHaveLength(1)
  })

  it('should run handle submit', () => {
    const handleSubmitFn = handleSubmit({
      createKey: 'test',
      create: () => Promise.resolve({ data: { test: {} } }),
      history: { push: jest.fn() },
      client: { query: () => Promise.resolve({ data: { toast: { } } }) }
    })({}, { setSubmitting: jest.fn() })
    expect(handleSubmitFn).resolves.toBe(undefined)
  })

  it('should run validate', () => {
    const validateFn = validate(['test'])({ test: false })
    expect(validateFn).toHaveProperty('test', 'test is Required')
  })
})

describe('Update Page Helpers', () => {
  it('should run getInitialValuesFromData', () => {
    const valuesFn = getInitialValuesFromData({
      data: { test: { id: '123456' }, test2: { } },
      initialValues: { testId: '', test2: { } },
      transform: { testId: 'test' }
    })
    expect(valuesFn).toHaveProperty('testId', '123456')
  })

  it('should run omit', () => {
    const omitFn = omit('test', 'test')
    expect(omitFn).toBe('test')
  })

  it('should run sanitize', () => {
    const data = { testId: '123456', __typename: 'test' }
    const sanitizeFn = sanitize(data)
    expect(sanitizeFn).toHaveProperty('testId', '123456')
  })

  it('should render Update Page 404', () => {
    const wrapper = mountWithTheme(<UpdatePage404 />, theme)
    expect(wrapper).toHaveLength(1)
  })
})
