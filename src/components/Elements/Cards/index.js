import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${props => props.theme.colors.white};
  background-clip: border-box;
  border: 1px solid ${props => props.theme.colors.gray.gray200};
  margin-bottom: 1.5em;
`

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`

export const CardHeader = styled.div`
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: ${props => props.theme.colors.light};
  border-bottom: 1px solid ${props => props.theme.colors.gray.gray200};
`

export const CardFooter = styled.div`
  padding: .75rem 1.25rem;
  background-color: ${props => props.theme.colors.light};
  border-top: 1px solid ${props => props.theme.colors.gray.gray200};
`
export default {
  Card,
  CardBody,
  CardHeader,
  CardFooter
}
