import React from 'react'
import styled from 'styled-components'

const StyledFaIcon = styled.i`
  color: ${props => props.theme.colors.gray.base};
  margin: 0;
  display: inline-block;
  width: 20px;
  font-size: 14px;
  text-align: center;
`

export const FaIcon = ({ icon, ...options }) => <StyledFaIcon className={`fa fa-${icon}`} {...options} />

export default {
  FaIcon
}
