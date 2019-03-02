import styled from 'styled-components'
import { getMaxWidthString, getFlexString } from '../../../utils/sizeutil'

const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 0 15px;

  ${({ xs }) => (xs ? getMaxWidthString(xs) : 'max-width: 100%')};
  ${({ xs }) => (xs ? getFlexString(xs) : 'flex: 0 0 100%')};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => (sm ? getMaxWidthString(sm) : '')};
    ${({ sm }) => (sm ? getFlexString(sm) : '')};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => (md ? getMaxWidthString(md) : '')};
    ${({ md }) => (md ? getFlexString(md) : '')};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => (lg ? getMaxWidthString(lg) : '')};
    ${({ lg }) => (lg ? getFlexString(lg) : '')};
  }
`

export default Column
