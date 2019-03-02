import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaIcon } from '../../Elements/Icons'

const Menu = styled.div`
 visibility: hidden
 opacity: 0
 position: absolute
 right: 25px
 top: 50px
 border-top: 1px solid ${({ theme }) => theme.colors.gray.gray200}
 border-left: 1px solid ${({ theme }) => theme.colors.gray.gray200}
 border-right: 1px solid ${({ theme }) => theme.colors.gray.gray200}
 background: ${({ theme }) => theme.colors.primary.text};
 transform: translateY(-2em);
 z-index: -1;
 transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
`

const ItemWrapper = styled.div`
  min-width: 180px
  padding: 10px
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray200}
  cursor: pointer
  color: ${({ theme }) => theme.colors.primary.black}
  
  i {
    margin-right: 10px
    font-size: 16px !important
  }
  
  :hover {
    background: ${({ theme }) => theme.colors.gray.gray100}
    text-decoration: none !important
  }
`

const SectionWrapper = styled.div`
  padding: 10px
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray200}
  background: ${({ theme }) => theme.colors.gray.gray101}
  color: ${({ theme }) => theme.colors.gray.gray501}
  font-weight: bold
  text-align: center
`

const menu = [
  {
    name: 'Settings'
  },
  {
    name: 'Profile',
    icon: 'user',
    to: '/user'
  },
  {
    name: ''
  },
  {
    name: 'Logout',
    icon: 'power-off',
    to: '/logout'
  }
]

const Item = ({ name, icon, to }) => (
  <Link to={to}>
    <ItemWrapper>
      <FaIcon icon={icon} />
      <span>{name}</span>
    </ItemWrapper>
  </Link>
)

const Section = ({ name }) => (
  <SectionWrapper>
    <span>{name}</span>
  </SectionWrapper>
)

export default () => (
  <Menu>
    {
      menu.map(({ name, icon, to }) => (
        to
          ? <Item key={name} name={name} icon={icon} to={to} />
          : <Section key={name} name={name} />
      ))
    }
  </Menu>
)
