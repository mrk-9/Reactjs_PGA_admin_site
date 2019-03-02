import React from 'react'
import { mount } from 'enzyme'
import Toast, { notifyWithUpdate, notify, updateNotify, updateErrorNotify, errorNotify } from '../'
import { Errors } from '../helpers'
import { mountWithTheme } from '../../../../utils/testutil'

describe('Toast Component', () => {
  it('should render correctly', () => {
    const Render = <Toast />
    const wrapper = mount(Render)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Notification function', () => {
  it('should notify', () => {
    const test = { type: 'success', message: '' }
    expect(notify(test)).toEqual(1)
  })
})

describe('Error Notification function', () => {
  it('should notify', () => {
    const Error = () => <div>Error Occurred</div>
    expect(errorNotify(Error)).toEqual(2)
  })
})

describe('Notification with update', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should notify with update', () => {
    const Render = <Toast />
    const msg = { message: 'New Message' }
    const updateMsg = { type: 'SUCCESS', message: 'Updated Message' }
    const ErrorMsg = () => <div>{updateMsg.message}</div>

    const wrapper = mount(Render)
    const id = notifyWithUpdate(msg)

    jest.runAllTimers()
    expect(wrapper.html()).toMatch(`${msg.message}`)

    updateNotify(id, updateMsg)

    jest.runAllTimers()
    expect(wrapper.html()).toMatch(`${updateMsg.message}`)

    updateErrorNotify(id, ErrorMsg)

    jest.runAllTimers()
    expect(wrapper.html()).toMatch(`${updateMsg.message}`)
  })

  afterEach(() => {
    jest.clearAllTimers()
  })
})

describe('Toast Helpers', () => {
  it('should error component correctly', () => {
    const theme = {
      colors: {
        white: '',
        gray: {},
        primary: {}
      }
    }

    const Render = Errors({ error: {}, dataKey: 'test' })
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper).toHaveLength(1)
  })
})
