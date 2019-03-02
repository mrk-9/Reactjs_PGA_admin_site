import React from 'react'
import { mountWithTheme, withRouter } from '../../../../../utils/testutil'
import Form, { renderElement, Section } from '../'
import { getInputProps, FormButtons } from '../helpers'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Form component', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(<Form formElements={[]} />, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should call renderElement function on array of elements', () => {
    const wrapper = mountWithTheme(<FormButtons />, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render FormButtons correctly', () => {
    const wrapper = getInputProps({ type: 'select', field: { name: 'select' } })
    expect(wrapper).toHaveProperty('name', 'select')
  })

  it('should get the correct props given input type', () => {
    const Component = renderElement({})({ elements: [] })
    const wrapper = mountWithTheme(Component, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render section ', () => {
    const Render = withRouter(() => <Section elements={[]} name='name' group='name' />)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
