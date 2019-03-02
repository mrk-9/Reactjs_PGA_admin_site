import styled from 'styled-components'
import { formatDate, renderEmail, renderImage } from '../../../utils/common'

export const Header = styled.p`
  margin-top: 7px
  color: ${({ theme: { colors } }) => colors.gray.gray400}
  font-weight: bold
  margin-top: 15px
  margin-bottom: 5px
  text-transform: capitalize
`

const Img = styled.img`
  width: 3%
`

export const renderSpecialField = (item, value) => {
  switch (item) {
    case 'createdAt':
      return formatDate(value)
    case 'updatedAt':
      return formatDate(value)
    case 'photo':
      return renderImage(Img, value)
    case 'email':
      return renderEmail(value)
    case 'closed':
      return value ? 'Yes' : 'No'
    default:
      return value
  }
}
