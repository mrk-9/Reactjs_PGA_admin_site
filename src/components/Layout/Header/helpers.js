import styled from 'styled-components'
import logo from '../../../logo.svg'
import { Link } from 'react-router-dom'

export const HeaderBrandImg = styled.img.attrs({
  src: logo
})`
  height: 55px;
  padding: 10px 10px 10px 50px;
  margin: auto;
`

export const BrandLink = styled(Link)`
  width: 155px;
  display: inline-block;
`

export const Nav = styled.nav.attrs({
  role: 'navigation'
})`
  border: 0;
  border-bottom: 1px solid #a4b7c1;
  height: 55px;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 121;
  height: 55px;
  background-color: #fff;
`

export const ImgStyle = {
  borderRadius: '50%'
}

export const Wrapper = styled.div`
  float: right
  margin-right: 55px
  margin-top: 10px
  padding: 3px
  
  i {
    font-size: 35px
  }
  
  img {
    width: 35px
  }
  
  :hover  {
    div {
      visibility: visible
      opacity: 1
      z-index: 1
      transform: translateY(0%);
      transition-delay: 0s, 0s, 0.3s; 
    }
  }
`
