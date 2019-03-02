import React from 'react'
import ReactTable from 'react-table'
import ListItem from './listItem'
import styled from 'styled-components'
import { defaultSorted } from '../Table/columnHelpers'

const ListWrapper = styled.div`
  display: flex
  flex-direction: column
  width: 100%
`

export const formatData = (data, columns) => {
  return data.reduce((acc, curr) => {
    const item = {}
    columns.forEach(({ Header, accessor, Cell }) => {
      const found = Object.keys(curr).find(id => id === accessor)
      if (found) {
        item[Header] = Cell ? Cell({ row: curr }) : curr[accessor]
      }
    })
    acc.push(item)
    return acc
  }, [])
}

export default ({ data, columns, titleKey, onSelectRow }) => (
  <ReactTable data={data} columns={columns} defaultSorted={defaultSorted}>
    {state => {
      const { sortedData, columns } = state
      const formattedData = formatData(sortedData, columns)

      return (
        <ListWrapper>
          {formattedData.map((data, idx) => {
            return <ListItem key={idx} data={data} titleKey={titleKey} onSelectRow={onSelectRow} />
          })}
        </ListWrapper>
      )
    }}
  </ReactTable>
)
