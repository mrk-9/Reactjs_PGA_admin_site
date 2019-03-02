import React from 'react'
import { withAuthProvider } from '@pga/auth-provider'
import { Wrapper, Header, BrandLink, HeaderBrandImg, ImgStyle, Nav } from './helpers'
import { Icons, ProfileImage } from '../../Elements'
import fallbackImg from '../../../assets/user-circle.svg'
import Menu from './menu'

const { FaIcon } = Icons

export default withAuthProvider(({ me }) => (
  <Header>
    <Nav>
      <BrandLink to='/'>
        <HeaderBrandImg />
      </BrandLink>
      <Wrapper>
        {
          me.photo
            ? <ProfileImage alt={me.firstName} src={me.photo} fallbackImg={fallbackImg} style={ImgStyle} />
            : <FaIcon icon='user-circle' />
        }
        <Menu />
      </Wrapper>
    </Nav>
  </Header>
))
