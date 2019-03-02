import React from 'react'
import ProfileImage from '../'
import { mountWithTheme } from '../../../../utils/testutil'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Profile Image Component', () => {
  it('should render image with https correctly', () => {
    const testImg = 'http://testImg.png'
    const testImg2 = 'https://testImg.png'

    const Render = <ProfileImage src={testImg} />
    const wrapper = mountWithTheme(Render, theme)

    expect(wrapper.find(`img[src='${testImg2}']`)).toHaveLength(1)
  })

  it('should render with fallback image', () => {
    const testImg = 'http://testImg.png'
    const fallbackImg = 'http://fallbackImg.png'

    const Render = <ProfileImage src={testImg} fallbackImg={fallbackImg} />
    const wrapper = mountWithTheme(Render, theme)

    wrapper.instance().handleError()
    expect(wrapper.state('imageSrc')).toEqual(fallbackImg)
  })
})
