import React from 'react'
import { mountWithTheme } from '../../../../utils/testutil'
import Error from '../Error'
import Loader from '../Loader'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Error Component', () => {
  it('should render correctly', () => {
    const Render = <Error />
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Loader Component', () => {
  it('should render correctly', () => {
    const Render = <Loader />
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
