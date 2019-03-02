export const dateRender = dataKey => rowData => {
  const { row } = rowData
  const timestamp = row[dataKey]
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
  return !timestamp ? 'N/A' : new Date(timestamp).toLocaleDateString('en-US', options)
}

export const moneyRender = dataKey => rowData => {
  const { row } = rowData
  const item = row[dataKey]
  return `$${item}`
}

export const percentageRender = dataKey => rowData => {
  const { row } = rowData
  const item = row[dataKey]
  return `${item}%`
}

export const booleanRender = dataKey => rowData => {
  const { row } = rowData
  const item = row[dataKey]
  return item ? 'Yes' : 'No'
}

export const defaultSorted = [
  {
    id: 'createdAt',
    desc: true
  }
]

export const defaultSortMethod = (a, b) => {
  return new Date(a).getTime() - new Date(b).getTime()
}

export const dateColumns = [
  {
    Header: 'Created At',
    accessor: 'createdAt',
    sortMethod: defaultSortMethod
  }
]
