import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import logoLoaderImg from './pga-loaderlogo.png'

const spinnerAnimation = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`

const fullSizeCss = css`
  width: 100%;
  height: 100%;
  position: absolute;
`

const StyledSpinner = styled.div`
  ${fullSizeCss}

  div {
    ${fullSizeCss}
    border: 4px solid #ccc;
    border-radius: 50%;
    animation: ${spinnerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.45s infinite;
    border-color: #ccc transparent transparent;

    :nth-child(2) { animation-delay: -0.3s }
    :nth-child(3) { animation-delay: -0.15s }
  }
`

const LogoImg = styled.img.attrs({
  src: logoLoaderImg
})`
  ${fullSizeCss}
  padding: 30px;
`

const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`

export default () => (
  <LogoWrapper>
    <StyledSpinner>
      <div />
      <div />
      <div />
    </StyledSpinner>
    <LogoImg />
  </LogoWrapper>
)
