// Direct
const water = (str) => {
  return `🌊 ${str} 🌊`
}

// Required single
import fire from './fire'

// Required folder
import * as utils from './utils'

export { fire, water, utils }
