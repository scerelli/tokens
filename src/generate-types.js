const JsonToTS = require('json-to-ts')
const fs = require('fs-extra')
const path = require('path')
const tokens = require('../platforms/web/tokens.json')

const run = () => {
  let types = ''
  JsonToTS(tokens, {
    rootName: 'TokensType'
  }).forEach(typeInterface => {
    types += `\n\n${typeInterface.replace('interface', 'export type').replace('{', '= {')}`
  })
  fs.writeFileSync(path.join('platforms', 'web', 'types.d.ts'), types)
}

try {
  run()
  process.exit(0)
} catch (error) {
  console.error('⚠️ Something went wrong:', error)
  process.exit(1)
}
