const tableHead = (theme) => ({
  boxShadow: 'none',
  borderBottom: `3px solid ${theme.colors.table.headBorder}`
})

const tableCell = {
  padding: '1em',
  fontWeight: 'bold',
  textAlign: 'left',
  borderBottomWidth: '2px'
}

const tableBody = {
  paddingTop: '1em',
  paddingBottom: '1em',
  textAlign: 'left'
}

export const hidePagination = (tableSize, limitSize) => tableSize > limitSize

export const tableProps = ({
  tableSize,
  limitSize,
  columns,
  highlight = true,
  striped = true,
  onSelectRow,
  theme
}) => ({
  className: `${striped && '-striped'} ${highlight && '-highlight'}`,
  columns,
  showPagination: hidePagination(tableSize, limitSize),
  getTheadProps: () => ({ style: tableHead(theme) }),
  getTheadThProps: () => ({ style: tableCell }),
  getTdProps: (state, rowInfo) => ({
    style: tableBody,
    onClick: (e, handleOriginal) => {
      const hasEditable = Object.keys(e.target.dataset).length === 0
      if (rowInfo && rowInfo.row && onSelectRow && hasEditable) {
        onSelectRow(rowInfo.row, rowInfo.original)
      }
      if (handleOriginal) {
        handleOriginal()
      }
    }
  }),
  previousText: '<',
  nextText: '>'
})

export const inputProp = {
  placeholder: 'search',
  name: 'search',
  size: 'sm'
}

export const buttonProp = {
  color: 'secondary'
}
