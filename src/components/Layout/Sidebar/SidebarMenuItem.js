import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaIcon } from '../../Elements/Icons'

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  padding: .75rem 1rem;
  display: block;
  white-space: nowrap;
  transition: .15s ease;

  i {
    transition: .15s ease;
    margin: 0 .5rem 0 0;
  }

  &.active {
    background-color: ${props => props.theme.colors.gray.gray700};

    i {
      color: ${props => props.theme.colors.primary.base};
    }
  }

  :hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary.base};
    text-decoration: none;

    i {
      color: ${props => props.theme.colors.white};
    }
  }
`

const SidebarLink = styled.li`
  padding: 0;
  margin: 0;
`

const SidebarTitle = styled.li`
  padding: .75rem 1rem;
  font-size: 11px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray.gray200};
  text-transform: uppercase;
  white-space: nowrap;
`

const SidebarMenuLink = ({ icon, label, to }) => (
  <SidebarLink>
    <StyledNavLink to={to} exact>
      <FaIcon icon={icon} /> {label}
    </StyledNavLink>
  </SidebarLink>
)

const SidebarMenuTitle = ({ label }) => (
  <SidebarTitle>
    {label}
  </SidebarTitle>
)

export default options => (
  !options.to
    ? <SidebarMenuTitle {...options} />
    : <SidebarMenuLink {...options} />
)
