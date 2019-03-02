import React from 'react'
import { mountWithTheme, withApollo, withRouter } from '../../../utils/testutil'
import Events from '../'
import EventsLanding, { handleRowSelection } from '../eventsLanding'
import EventsDetail from '../eventsDetail'
import EventsCreate from '../eventsCreate'
import { eventColumn } from '../helpers'
import EventsUpdate from '../eventsUpdate'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Events container', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(withRouter(() => withApollo(Events)), theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Events Landing component', () => {
  it('should render correctly', () => {
    const props = {
      title: 'Events',
      titleKey: 'Event Name',
      columns: [],
      dataKey: 'events',
      tableLimitSize: 10,
      onSelectRow: jest.fn(),
      hasCreate: true
    }
    const handleRow = handleRowSelection({ history: { push: jest.fn() } })('', { id: '' })
    const Render = withRouter(() => withApollo(EventsLanding), props)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
    expect(handleRow).toBe(undefined)
  })
})

describe('Events Detail component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter(() => <EventsDetail match={{ params: {} }} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Events Create component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter((props) => <EventsCreate {...props} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Events Update component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter((props) => <EventsUpdate location={{ state: {} }} {...props} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Events Helpers', () => {
  it('product column should be array', () => {
    expect(eventColumn).toHaveLength(5)
  })
})
