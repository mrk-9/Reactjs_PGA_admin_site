import BillingEvents from '../'
import { mountWithTheme, withApollo, withRouter } from '../../../utils/testutil'
import BillingEventsLanding from '../billingEventLanding'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('BillingEvents container', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(BillingEvents))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Journal Landing component', () => {
  it('should render correctly', () => {
    const props = {
      title: 'Billing Events',
      titleKey: 'Journal Name',
      columns: [],
      dataKey: 'billingEvents',
      tableLimitSize: 10,
      onSelectRow: jest.fn(),
      hasCreate: true
    }
    const Render = withRouter(() => withApollo(BillingEventsLanding), props)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
