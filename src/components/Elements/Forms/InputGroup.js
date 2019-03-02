import React from 'react'
import styled, { css } from 'styled-components'
import BaseInput from './BaseInput'

const prependCss = css`
  margin-right: -1px;
`

const appendCss = css`
  margin-left: -1px;
`

const StyledBaseInput = BaseInput.extend`
  display: flex;
  width: 1%;
  flex: 1 1 auto;
`

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  margin-bottom: 1rem;
`

const AddonWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  vertical-align: middle;
  ${props => (props.before ? prependCss : appendCss)}
`

const Aligner = styled.span`
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.colors.gray.gray700};
  text-align: center;
  white-space: nowrap;
  background-color: ${props => props.theme.colors.gray.gray100};
  border: 1px solid ${props => props.theme.colors.gray.gray200};
`

export const AddGroupAddon = ({ content, before }) => (
  <AddonWrapper before={before}>
    <Aligner>{content}</Aligner>
  </AddonWrapper>
)

export default ({ prepend, append, ...options }) => (
  <InputGroup>
    {prepend && <AddGroupAddon content={prepend} before />}

    <StyledBaseInput {...options} />

    {append && <AddGroupAddon content={append} />}
  </InputGroup>
)
