import { init } from './main'
import { commonToNum } from './utils'

const packageJson = require('../package.json')

// 判断 node 版本
const currentNodeVersion = process.versions.node
const semver = currentNodeVersion.split('.')
const major = commonToNum(semver[0])

const MinVersion = 10

if (major < MinVersion) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      packageJson.name +
      ' requires Node ' +
      MinVersion +
      ' or higher. \n' +
      'Please update your version of Node.'
  )
  process.exit(1)
}

init()
