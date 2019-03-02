import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.button`
  padding: 0;
  margin: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  background-color: transparent;
  border-color: transparent;
  font-size: 1rem;
  line-height: 1.5;
  transition: color .15s ease-in-out;
  color: ${props => props.theme.colors.gray.gray900};
  cursor: pointer;

  :active,
  :focus,
  :hover {
    color: ${props => props.theme.colors.primary.base};
  }

  svg {
    display: block;
    width: 30px;
    height: 30px;
  }
`

const SvgMenuIcon = ({ title }) => (
  <svg viewBox='0 0 30 30' focusable='false'>
    {title && <title>{title}</title>}
    <path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeMiterlimit='10' d='M4 7h22M4 15h22M4 23h22' />
  </svg>
)

export default ({ title, onHandleClick }) => (
  <StyledMenuButton onClick={onHandleClick}>
    <SvgMenuIcon title={title} />
  </StyledMenuButton>
)
