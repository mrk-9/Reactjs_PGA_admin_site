import { cond, path, pathEq, T } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { formatCamelCase, formatDate, formatDateExceptTime } from '../../../utils/common'

const Wrapper = styled.div`
  margin-bottom: 25px;
  
  p {
    font-weight: bold;
  }
  
  .bottom {
    display: flex;
    flex-direction: column;
    float: right;
    width: 25%;
    margin-top: 25px;
    
    div {
      margin-bottom: 20px;
      span {
        flex-basis: 100%;
      }
      span:last-child::before {
        content: '$';
      }
    }
    
    div:nth-child(2) {
      span:last-child::before {
        content: '';
      }
    
      span:last-child::before {
        content: '$';
      }
    }
    
    div:last-child {
      span:last-child {
        font-weight: bold;
      }
    }
  }
`

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
  }
  
  div span:first-child {
    text-transform: capitalize;
    font-weight: bold;
    margin-right: 5px;
  }
`

export const formatData = ([param = {}]) => {
  const { value = {} } = param
  return Object.keys(value || {}).reduce((acc, curr) => {
    if (curr === 'address' && value[curr]) {
      const address = value[curr]
      const addresses = Object.keys(address).reduce((ac, cur) => {
        if (address[cur] && address[cur] !== 'Address') {
          ac = ac + ` ${address[cur]}`
        }
        return ac
      }, '')
      acc.push({ name: curr, value: addresses })
      return acc
    }
    if (value[curr]) {
      acc.push({ name: curr, value: value[curr] })
    }

    return acc
  }, [])
}

const getValue = path(['value'])
const getFormattedInvoiceLink = data =>
  (data ? <a href={data} target='_blank' rel='noopener noreferrer'>{data}</a> : 'N/A')

export const formatValue = cond([
  [pathEq(['name'], 'createdAt'), data => formatDate(getValue(data))],
  [pathEq(['name'], 'date'), data => formatDateExceptTime(getValue(data))],
  [pathEq(['name'], 'invoiceUrl'), data => getFormattedInvoiceLink(getValue(data))],
  [T, path(['value'])]
])

export const formatTitle = cond([
  [pathEq(['name'], 'createdAt'), () => 'Reported Date'],
  [pathEq(['name'], 'date'), () => 'Transaction Date'],
  [T, path(['name'])]
])

export const InfoBlock = ({ data = [], filters = [], title, dataKey, isBottom }) => {
  const formattedData = dataKey ? formatData(data.filter(({ name }) => name === dataKey)) : data
  const filtered = formattedData.filter(({ name }) => filters.includes(name))

  return (
    filtered.length > 0 &&
    <Wrapper>
      {title && <p>{title}:</p>}
      <SubWrapper className={isBottom ? 'bottom' : null}>
        {filtered.map(item => {
          return (
            <div key={item.name}>
              <span>{formatCamelCase(formatTitle(item))}</span>
              <span>{formatValue(item)}</span>
            </div>
          )
        })}
      </SubWrapper>
    </Wrapper>
  )
}
