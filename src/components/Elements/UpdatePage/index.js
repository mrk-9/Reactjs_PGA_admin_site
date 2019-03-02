import React from 'react'
import { UpdatePage404, UpdatePageQuery } from './helper'

export default ({ dataKey, title, location: { state = {} }, ...props }) => {
  const { id } = state
  return id
    ? <UpdatePageQuery dataKey={dataKey} id={id} title={title} {...props} />
    : <UpdatePage404 title={title} dataKey={dataKey} />
}
