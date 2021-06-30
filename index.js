const StyleDictionary = require('style-dictionary').extend('tokens.config.json')
const HexHslValues = require('./src/transformers/hex-hslvalues')

StyleDictionary.registerTransform(HexHslValues)

StyleDictionary.buildAllPlatforms()
