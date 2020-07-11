// Direct
const water = (str) => {
  return `🌊 ${str} 🌊`
}

// Required single
const fire = require('./fire')

// Required folder
const utils = require('./utils')

module.exports = { fire, water, utils }
