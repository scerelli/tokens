module.exports = {
  name: 'size/px-rem',
  type: 'value',
  matcher: (prop) => {
    return prop.attributes.category === 'size'
  },
  transformer: (token) => {
    const baseRootSize = 18
    return `${(token.value / baseRootSize).toFixed(2)}rem`
  }
}
