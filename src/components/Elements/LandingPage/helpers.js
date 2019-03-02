import React, { Fragment } from 'react'
import { Delete, Edit } from '../Editable'
import ListView from '../ListView'
import MediaQuery from 'react-responsive'
import Tables from '../Table'
import { formatDate, formatDateExceptTime } from '../../../utils/common'
import { pathOr } from 'ramda'

const { TableSearch } = Tables

export const onEdit = ({ id, dataKey, history }) => {
  history.push(`${dataKey}/edit`, { id })
}

export const editableColumnRender = ({ id, editableColumn: { canEdit, canDelete }, ...props }) => rowData => {
  const { row } = rowData
  const idx = row[id]
  return (
    <Fragment>
      {canDelete && <Delete id={idx} />}
      {canEdit && <Edit onEdit={onEdit.bind(null, { id: idx, ...props })} />}
    </Fragment>
  )
}

export const editable = ({ editableColumn, ...props }) =>
  (!editableColumn ? [] : [{ Cell: editableColumnRender({ id: 'id', editableColumn, ...props }) }])

export const formatTableData = (data, dataKey) =>
  pathOr([], [dataKey, 'edges'], data)
    .filter(({ node }) => !!node)
    .map(({ node: { createdAt, date, ...rest } = {} }) => ({ ...rest, createdAt: formatDate(createdAt), date: formatDateExceptTime(date) }))

export const LandingPage = ({ tableData, column, titleKey, tableLimitSize, onSelectRow, ...props }) => (
  <MediaQuery maxWidth={1224}>
    {matches => {
      if (matches) {
        return (
          <ListView
            data={tableData}
            columns={column}
            titleKey={titleKey}
            limitSize={tableLimitSize}
            onSelectRow={onSelectRow(props)}
          />
        )
      } else {
        return (
          <TableSearch data={tableData} columns={column} limitSize={tableLimitSize} onSelectRow={onSelectRow(props)} />
        )
      }
    }}
  </MediaQuery>
)
