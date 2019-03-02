import React from 'react'
import { mountWithTheme } from '../../../../utils/testutil'
import { tableProps, hidePagination } from '../common'
import Tables from '../'
import { moneyRender, percentageRender, dateRender, defaultSortMethod, booleanRender } from '../columnHelpers'

const { TableSearch, Table } = Tables

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {},
    table: {
      headBorder: ''
    }
  }
}

const props = {
  data: [],
  columns: []
}

describe('Table Component', () => {
  it('should render correctly', () => {
    const Render = <Table {...props} />
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('TableSearch Component', () => {
  it('should render correctly', () => {
    const Render = <TableSearch {...props} />
    const wrapper = mountWithTheme(Render, theme)
    const instance = wrapper.instance()

    expect(instance.state).toHaveProperty('searchValue', '')

    instance.onChange({ target: { value: 'test' } })
    expect(instance.state).toHaveProperty('searchValue', 'test')

    instance.onClick({ target: { value: 'test' } })
    expect(instance.state).toHaveProperty('searchValue', '')

    expect(instance.match('TEST', 'test')).toBe(true)

    expect(instance.filterOut('test')({ name: 'TEST' })).toEqual('TEST')

    expect(instance.filterOut('test')({ name: { name: 'TEST' } })).toEqual({ name: 'TEST' })

    instance.onChange({ target: { value: 'test' } })
    expect(instance.filter([{ name: 'TEST' }, { name: 'Fail' }])).toEqual([{ name: 'TEST' }])

    expect(wrapper).toHaveLength(1)
  })
})

describe('Table Props', () => {
  const param = {
    tableSize: 10,
    limitSize: 10,
    columns: [],
    onSelectRow: () => {}
  }
  it('should return table props given some props input', () => {
    const result = tableProps({ ...param })
    const tdProp = result.getTdProps({}, { row: {}, original: '' })
    tdProp.onClick({ target: { dataset: { } } }, jest.fn())
    expect(tdProp).toHaveProperty('style')
    expect(result).toHaveProperty('columns', [])
    expect(result).toHaveProperty('showPagination', false)
    expect(result).toHaveProperty('className', '-striped -highlight')
  })

  it('should show or hide pagination', () => {
    const tableSize = 10
    const limitSize = 5
    expect(hidePagination(tableSize, limitSize)).toEqual(true)
  })
})

describe('Table cell renders', () => {
  it('should render dates correctly', () => {
    const rowData = {
      row: {
        total: 10
      }
    }
    const dataKey = 'total'
    expect(moneyRender(dataKey)(rowData)).toEqual('$10')
  })

  it('should render percentages correctly', () => {
    const rowData = {
      row: {
        tax: 10
      }
    }
    const dataKey = 'tax'
    expect(percentageRender(dataKey)(rowData)).toEqual('10%')
  })

  it('should render dateRender correctly', () => {
    const rowData = {
      row: {
        createdAt: '2018-09-14T19:07:15.314Z'
      }
    }
    const dataKey = 'createdAt'
    expect(dateRender(dataKey)(rowData)).toMatch('September 14, 2018')
  })

  it('should render boolean correctly', () => {
    const rowData = {
      row: {
        closed: true
      }
    }
    const dataKey = 'closed'
    expect(booleanRender(dataKey)(rowData)).toMatch('Yes')
  })

  it('should render percentages correctly', () => {
    const date1 = '2018-09-14T19:07:15.314Z'
    const date2 = '2018-09-14T19:09:24.236Z'
    expect(defaultSortMethod(date1, date2) < -1).toBeTruthy()
  })
})
