import React from 'react'
import { gql } from 'apollo-boost'
import { shallow } from 'enzyme'
import { mountWithTheme, withApollo, withRouter } from '../../../../utils/testutil'
import LandingMain from '../'
import { editableColumnRender, editable, LandingPage, formatTableData, onEdit } from '../helpers'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {},
    table: {}
  }
}

const query = gql`{
  test
}
`

describe('Landing Page component', () => {
  it('should render correctly', () => {
    const defaultProps = {
      query,
      title: 'Test',
      titleKey: 'Test Name',
      columns: [],
      dataKey: 'tests',
      tableLimitSize: 10,
      onSelectRow: jest.fn(),
      hasCreate: true
    }
    const Render = withApollo((props) => withRouter(LandingMain, props), defaultProps)
    const wrapper = mountWithTheme(Render, theme)
    const html = wrapper.html()

    const mediaWrapper = shallow(wrapper.instance().props.children)

    expect(wrapper).toHaveLength(1)
    expect(mediaWrapper).toHaveLength(1)
    expect(html).toMatch('/tests/create')
    expect(html).toMatch('Create')
    expect(html).toMatch('Test')
    expect(html).toMatch('Loading...')
  })
})

describe('Landing Page Helpers', () => {
  it('should render editableColumnRender', () => {
    const EditColumn = editableColumnRender({ id: 'id', editableColumn: { canEdit: true, canDelete: true } })
    const wrapper = shallow(<EditColumn row={{}} />)
    expect(wrapper).toHaveLength(1)
  })

  it('should run editable', () => {
    const editableFn = editable({ editableColumn: { canEdit: true, canDelete: true } })
    expect(editableFn[0]).toHaveProperty('Cell')
  })

  it('should format table data', () => {
    const formatTableDataFn = formatTableData({ test: { edges: [{ node: { } }] } }, 'test')
    expect(formatTableDataFn[0]).toHaveProperty('createdAt')
  })

  it('should run onEdit fn', () => {
    const onEditFn = onEdit({ history: { push: jest.fn() } })
    expect(onEditFn)
  })

  it('should render landing page', () => {
    const defaultProps = {
      tableData: [],
      titleKey: 'Test Name',
      column: [],
      tableLimitSize: 10,
      onSelectRow: jest.fn()
    }
    const Render = withApollo(LandingPage, defaultProps)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
