import React from 'react'
import { mount } from 'enzyme'
import Column from '../'

describe('Column component', () => {
  it('should render correctly', () => {
    const Render = <Column xs={100} sm={100} md={100} lg={100} />
    const wrapper = mount(Render)
    expect(wrapper).toHaveLength(1)
  })
})
