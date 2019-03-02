import { shallow } from 'enzyme/build'
import { mountWithTheme, shallowWithTheme, withApollo } from '../../../../utils/testutil'
import BaseModal from '../base'
import { ModalBody } from '../helper'
import Modal from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('ModalBody Component', () => {
  it('should render correctly', () => {
    const Render = withApollo(ModalBody)
    const wrapper = mountWithTheme(Render, theme)
    const innerWrapper = shallow(wrapper.instance().props.children)
    expect(innerWrapper).toHaveLength(1)
    expect(wrapper).toHaveLength(1)
  })
})

describe('BaseModal Component', () => {
  it('should render correctly', () => {
    const Render = withApollo(BaseModal)
    const wrapper = mountWithTheme(Render, theme)
    const innerWrapper = shallow(wrapper.instance().props.children)
    expect(innerWrapper).toHaveLength(1)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Modal Component', () => {
  it('should render correctly', () => {
    const Render = withApollo(Modal)
    const wrapper = shallowWithTheme(Render, theme)
    const innerWrapper = shallow(wrapper.instance().props.children)
    expect(innerWrapper).toHaveLength(1)
    expect(wrapper).toHaveLength(1)
  })
})
