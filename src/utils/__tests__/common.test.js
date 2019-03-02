import { formatCamelCase, formatDate, imgSrc } from '../common'

describe('Util Helpers', () => {
  it('should format camel case variables', () => {
    const test = 'firstName'
    expect(formatCamelCase(test)).toBe('first Name')
  })

  it('should format data correctly', () => {
    const test = '2018-08-16T18:24:27.123Z'
    expect(formatDate(test)).toMatch('August 16, 2018')
  })

  it('should replace http with https', () => {
    const test = 'http://test.com'
    expect(imgSrc(test)).toMatch('https')
  })
})
