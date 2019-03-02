import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { is, isNil } from 'ramda'
import { Header, renderSpecialField } from './helpers'
import { formatCamelCase } from '../../../utils/common'

export const Item = ({ link, item, value }) => {
  return link
    ? <p>
      <span>{formatCamelCase(item)}</span>
      <span><Link to={link}>{value}</Link></span>
    </p>
    : <p>
      <span>{formatCamelCase(item)}</span>
      <span>{renderSpecialField(item, value)}</span>
    </p>
}

export const renderMap = value =>
  Object.keys(value)
    .filter(item => !isNil(value[item]) && item !== '__typename')
    .map(item => renderItem(item, value[item]))

export const Section = ({ item, value }) => (
  <Fragment key={item}>
    <Header>{formatCamelCase(item)}</Header>
    <hr align='left' />
    {renderMap(value)}
  </Fragment>
)

export const PaymentTypeSection = ({ item, value = [] }) => (
  <Fragment key={item}>
    <Header>{formatCamelCase(item)}</Header>
    <hr align='left' />
    {value.length === 0
      ? <p>No Payment Types</p>
      : value.map(({ node: { id = '#', name = 'N/A' } }) => (
        <p key={id}>
          <span>{name}</span>
          <span><Link to={`/paymentTypes/${id}`}>{id}</Link></span>
        </p>
      ))}
  </Fragment>
)

export const renderObject = (item, value) => {
  const { id, edges, name } = value

  if (id) {
    return <Item key={item} value={name} item={item} link={`/${item}s/${id}`} />
  }

  if (edges) {
    if (item === 'paymentTypes') return <PaymentTypeSection key={item} value={edges} item={item} />
    return edges.length === 0 ? null : <Item key={item} value={name} item={item} link={`/${item}`} />
  }

  return <Section key={item} value={value} item={item} />
}

export const renderItem = (item, value) => {
  if (is(Object, value)) {
    return renderObject(item, value)
  }

  return <Item key={item} value={value} item={item} />
}
