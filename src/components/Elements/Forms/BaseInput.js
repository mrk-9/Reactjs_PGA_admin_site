import styled, { css } from 'styled-components'

const defaultStyling = css`
  padding: .375rem .75rem;
  font-size: .875rem;
  line-height: 1.5;
`

const lgStyling = css`
  padding: .5rem 1rem;
  font-size: 1.09375rem;
  line-height: 1.5;
`

const smStyling = css`
  padding: .25rem .5rem;
  font-size: .76563rem;
  line-height: 1.5;
`

const BaseInput = styled.input.attrs({
  type: props => props.type || 'text'
})`
  display: block;
  position: relative;
  width: 100%;
  color: ${props => props.theme.colors.gray.gray700};
  background-color: ${props => props.theme.colors.white};
  background-clip: padding-box;
  border: 1px solid ${props => props.theme.colors.gray.gray200};
  border-radius: 0;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  ${props => props.size === 'lg' && lgStyling}
  ${props => props.size === 'sm' && smStyling}
  ${props => !props.size && defaultStyling}

  :focus {
    border-color: ${props => props.theme.colors.primary.base};
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.primary.transparent}
  }
`

export default BaseInput
