import React from 'react'
import { mount } from 'enzyme'
import LoadingView from '../'

describe('LoadingView Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<LoadingView />)
    expect(wrapper).toHaveLength(1)
  })
})
