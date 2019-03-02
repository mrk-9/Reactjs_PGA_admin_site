import React from 'react'
import { mountWithTheme, withApollo, withRouter } from '../../../utils/testutil'
import Sections from '../'
import SectionDetail from '../sectionDetail'
import SectionLanding, { handleRowSelection } from '../sectionLanding'
import { sectionColumn } from '../helpers'
import SectionUpdate from '../sectionUpdate'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Sections container', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(Sections))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Section Landing component', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(SectionLanding))
    const wrapper = mountWithTheme(Render, theme)
    const handleRow = handleRowSelection({ history: { push: jest.fn() } })('', { id: '' })
    expect(handleRow).toBe(undefined)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Section Detail component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter(() => <SectionDetail match={{ params: {} }} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Section Update component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter((props) => <SectionUpdate location={{ state: {} }} {...props} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Section Helpers', () => {
  it('product column should be array', () => {
    expect(sectionColumn).toHaveLength(4)
  })
})
