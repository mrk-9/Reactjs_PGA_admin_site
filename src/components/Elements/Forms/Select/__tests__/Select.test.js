import React from 'react'
import { gql } from 'apollo-boost'
import { shallow } from 'enzyme'
import { mountWithTheme, withApollo } from '../../../../../utils/testutil'
import Select, { CustomSelect } from '../'
import { Display } from '../helper'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Select Component', () => {
  it('should render correctly', () => {
    const query = gql`{
      test
    }
    `
    const props = {
      name: 'test',
      label: 'select',
      id: 'select',
      query,
      dataKey: 'test',
      onBlur: jest.fn(),
      onChange: jest.fn(),
      client: {
        query: () => Promise.resolve({ data: { test: { edges: [{ node: { id: 'testId', name: 'test' } }] } } })
      }
    }

    const Render = <CustomSelect {...props} />
    const wrapper = mountWithTheme(Render, theme)
    const instance = wrapper.instance()

    expect(instance.getOptions(instance.props)).resolves.toBeDefined()

    instance.handleChange('newValue')
    expect(instance.props.onChange).toHaveBeenCalled()
    expect(instance.state.value).toBe('newValue')

    instance.handleBlur()
    expect(instance.props.onBlur).toHaveBeenCalled()

    expect(wrapper).toHaveLength(1)
    expect(wrapper.html()).toMatch('select')
  })

  it('should render top level select correctly', () => {
    const query = gql`{
      test
    }
    `
    const props = {label: 'select', id: 'select', query, onBlur: jest.fn(), onChange: jest.fn()}

    const Render = withApollo(Select, props)
    const wrapper = mountWithTheme(Render, theme)
    const selectWrapper = shallow(wrapper.instance().props.children)

    expect(wrapper).toHaveLength(1)
    expect(selectWrapper).toHaveLength(1)
  })

  it('should render Display', () => {
    const Render = <Display label={''} msg={''} />
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
