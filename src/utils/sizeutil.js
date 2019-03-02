export const getMaxWidthString = (span) => {
  if (!span) return ''

  const width = (span / 12) * 100
  return `max-width: ${width}%`
}

export const getFlexString = (span) => {
  if (!span) return ''

  const width = (span / 12) * 100
  return `flex: 0 0 ${width}%`
}
