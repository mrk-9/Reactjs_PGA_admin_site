import React from 'react'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  text-align: center
  margin-top: 10px
`

const Pagination = styled.ul`
  list-style-type: none
  display: inline-flex
  margin: 0
  padding: 0
  overflow: hidden
  border: 1px solid ${({ theme: { colors } }) => colors.gray.gray200}
  border-right: none
`
const PaginationItem = styled.li`
  float: left
  font-size: 16px
  display: block
  text-align: center
  padding: 5px 12px
  color: ${({ current, theme: { colors } }) => (current ? colors.primary.text : colors.primary.dark)}
  border-right: 1px solid ${({ theme: { colors } }) => colors.gray.gray200}
  background-color: ${({ current, theme: { colors } }) => (current ? colors.primary.base : 'none')}
  :hover {
    background: ${({ theme: { colors } }) => colors.gray.gray100};
    cursor: url(hand.cur), pointer
  }
`

export default ({ noOfPages, currentPage, handleClick }) => {
  const data = new Array(noOfPages).fill(1)

  return (
    <PaginationWrapper>
      <Pagination>
        {data.map((i, idx) => {
          const id = idx + 1
          const key = `key${id}`
          const current = currentPage === id
          return <PaginationItem key={key} current={current} onClick={handleClick.bind(this, id)}>{id}</PaginationItem>
        })}
      </Pagination>
    </PaginationWrapper>
  )
}
