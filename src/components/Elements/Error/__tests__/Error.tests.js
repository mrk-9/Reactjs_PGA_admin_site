import React from 'react'
import { mount } from 'enzyme'
import Error from '../'

describe('Error Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Error />)
    expect(wrapper).toHaveLength(1)
  })
})
