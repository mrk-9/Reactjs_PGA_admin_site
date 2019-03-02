import React from 'react'
import { shallow } from 'enzyme/build'
import { mountWithTheme, withApollo } from '../../../../utils/testutil'
import ListView from '../'
import ListContainer, { formatData } from '../listView'
import ListItem from '../listItem'
import Pagination from '../pagination'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

const props = {
  data: [],
  columns: []
}

describe('List View component', () => {
  it('should render correctly', () => {
    const Render = () => (
      <ListView {...props} />
    )
    const wrapper = mountWithTheme(withApollo(Render), theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('List View Container', () => {
  it('should render correctly', () => {
    const Render = () => (
      <ListContainer {...props} />
    )
    const wrapper = mountWithTheme(withApollo(Render), theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should return formatted data', () => {
    const data = [{ id: 'hi' }]
    const column = [{ Header: 'ID', accessor: 'id' }]
    const result = formatData(data, column)
    expect(result).toEqual([{ ID: 'hi' }])
  })
})

describe('List View Item', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render correctly', () => {
    const props = {
      query: '',
      data: [],
      columns: [],
      onSelectRow: jest.fn()
    }
    const Render = withApollo(ListItem, props)
    const wrapper = mountWithTheme(Render, theme)
    const itemWrapper = shallow(wrapper.instance().props.children)
    const itemInstance = itemWrapper.instance()

    jest.runAllTimers()
    itemInstance.handleClick()

    expect(wrapper).toHaveLength(1)
    expect(itemInstance.state).toEqual({ isOpen: false })

    jest.runAllTimers()
    itemInstance.toggle()
    expect(itemInstance.state).toEqual({ isOpen: true })
  })

  afterEach(() => {
    jest.clearAllTimers()
  })
})

describe('List View Pagination', () => {
  it('should render correctly', () => {
    const rest = {
      handleClick: () => {}
    }
    const Render = () => (
      <Pagination {...rest} />
    )
    const wrapper = mountWithTheme(withApollo(Render), theme)
    expect(wrapper).toHaveLength(1)
  })
})
