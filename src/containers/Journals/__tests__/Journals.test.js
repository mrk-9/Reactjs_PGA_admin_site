import Journals from '../'
import { mountWithTheme, withApollo, withRouter } from '../../../utils/testutil'
import JournalLanding from '../journalLanding'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Journals container', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(Journals))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Journal Landing component', () => {
  it('should render correctly', () => {
    const props = {
      title: 'Journals',
      titleKey: 'Journal Name',
      columns: [],
      dataKey: 'Journals',
      tableLimitSize: 10,
      onSelectRow: jest.fn(),
      hasCreate: true
    }
    const Render = withRouter(() => withApollo(JournalLanding), props)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
