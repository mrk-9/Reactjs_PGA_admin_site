import React from 'react'
import { shallow } from 'enzyme'
import { mountWithTheme, withApollo } from '../../../../utils/testutil'
import BaseInput from '../BaseInput'
import FormGroup from '../FormGroup'
import InputGroup, { AddGroupAddon } from '../InputGroup'
import Radio from '../Radio'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Form Components', () => {
  it('should render Base Input', () => {
    const wrapper = mountWithTheme(<BaseInput />, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render Form Group', () => {
    const wrapper = mountWithTheme(<FormGroup />, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render Input Group', () => {
    const wrapper = mountWithTheme(<AddGroupAddon before='input' content='input' />, theme)
    const inputGroupWrapper = mountWithTheme(<InputGroup append='inputGroup' prepend='inputGroup' />, theme)

    expect(wrapper).toHaveLength(1)
    expect(inputGroupWrapper).toHaveLength(1)
    expect(wrapper.html()).toMatch('input')
    expect(inputGroupWrapper.html()).toMatch('inputGroup')
  })

  it('should render Radio input', () => {
    const props = { data: [], onChange: jest.fn() }
    const Render = withApollo(Radio, props)
    const wrapper = mountWithTheme(Render, theme)

    const radioWrapper = shallow(wrapper.instance().props.children)
    const radioInstance = radioWrapper.instance()

    radioInstance.handleChange({ target: { value: 'radio' } })
    expect(wrapper).toHaveLength(1)
    expect(radioWrapper).toHaveLength(1)
  })
})
