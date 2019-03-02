import React, { Fragment } from 'react'
import { shallow } from 'enzyme'
import { mountWithTheme, withRouter } from '../../../../utils/testutil'
import { Item, renderItem, renderMap, renderObject, Section, PaymentTypeSection } from '../info'
import { renderSpecialField } from '../helpers'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Product Helpers', () => {
  it('mapper should map an object to Item component', () => {
    const value = { event: { id: 'event' }, name: 'test' }
    const Render = withRouter(() => (
      <Fragment>{Object.keys(value).map(item => renderItem(item, value[item]))}</Fragment>
    ))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('Item component should render', () => {
    const Render = withRouter(() => <Item item='firstName' />)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('renderMap should render correctly', () => {
    const value = { event: { id: 'event' }, name: 'test', test: { name: 'test' } }
    const Render = withRouter(() => <Fragment>{renderMap(value)}</Fragment>)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render section ', () => {
    const Render = withRouter(() => <Section value={{}} item='name' />)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render special fields', () => {
    const field = renderSpecialField('createdAt', '2018-08-29T20:52:51.589Z')
    expect(field).toMatch('August 29, 2018')

    const field1 = renderSpecialField('email', 'test@test.com')
    const Email = () => <a href='mailto:test@test.com'>test@test.com</a>
    const wrapper = shallow(<Email />)

    expect(field1.props).toEqual(wrapper.props())

    const field2 = renderSpecialField('updatedAt', '2018-08-29T20:52:51.589Z')
    expect(field2).toMatch('August 29, 2018')
  })

  it('should render component from renderObject ', () => {
    const Render = withRouter(() => renderObject('event', { id: 'event', name: 'event' }))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
    expect(wrapper.html()).toMatch('/events/event')
  })

  it('should render empty PaymentTypes', () => {
    const Render = withRouter(() => <PaymentTypeSection item={'paymentTypes'} value={[]} />)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render PaymentTypes', () => {
    const paymentTypes = [
      {
        node: {
          id: 1234,
          name: 'Payment 1'
        }
      },
      {
        node: {
          id: 5678,
          name: 'Payment 2'
        }
      }
    ]
    const Render = withRouter(() => <PaymentTypeSection item={'paymentTypes'} value={paymentTypes} />)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
