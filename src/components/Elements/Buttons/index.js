import styled from 'styled-components'

const getNormalStateColor = ({ theme, outline, color }) => {
  if (outline) {
    return theme.colors[color] ? theme.colors[color].base : theme.colors.primary.base
  }

  return theme.colors[color] ? theme.colors[color].text : theme.colors.primary.base
}

export default styled.button`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  margin-top: ${props => (props.size === 'large' ? '.5rem' : 'auto')};
  padding: ${props => (props.size === 'large' ? '.5rem 1rem' : '.375rem .75rem')};
  font-size: ${props => (props.size === 'large' ? '1.09375rem' : '.875rem')};

  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};

  color: ${props => getNormalStateColor(props)};
  background-color: ${props => (!props.outline && props.theme.colors[props.color] ? props.theme.colors[props.color].base : 'transparent')};
  border-color: ${props => (props.theme.colors[props.color] ? props.theme.colors[props.color].base : 'transparent')};

  &:not(:disabled):active,
  &:not(:disabled):hover {
    color: ${({ theme, color }) => (theme.colors[color] ? theme.colors[color].text : theme.colors.primary.dark)};
    background-color: ${({ theme, color }) => (theme.colors[color] ? theme.colors[color].dark : 'transparent')};
    border-color: ${({ theme, color }) => (theme.colors[color] ? theme.colors[color].dark : 'transparent')};
    text-decoration: ${({ theme, color }) => (theme.colors[color] ? 'none' : 'underline')};
  }

  &:not(:disabled):focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${({ theme, color }) => (theme.colors[color] ? theme.colors[color].transparent : 'none')};
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`
