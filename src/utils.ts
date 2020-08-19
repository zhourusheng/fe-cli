import fs from 'fs'
import symbol from 'log-symbols'
import chalk from 'chalk'

import * as T from './type'

export const isFoldExist = (name: string) => {
  return fs.existsSync(name)
}

export const errConsole = (tip: string) => {
  console.log(symbol.error, chalk.red(tip))
}
