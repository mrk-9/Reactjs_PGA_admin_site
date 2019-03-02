import React from 'react'
import styled from 'styled-components'
import BaseInput from './BaseInput'

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
`

const FieldDescription = styled.span`
  font-size: 10px;
  color: ${props => props.theme.colors.gray.gray501};
`
export default ({ label, id, description = '', ...options }) => (
  <StyledWrapper>
    <label htmlFor={id}>{label} <FieldDescription>{description}</FieldDescription></label>
    <BaseInput {...options} />
  </StyledWrapper>
)
