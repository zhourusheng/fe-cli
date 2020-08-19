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

// 将字符串转为数字进行运算，防止出现NaN
export const commonToNum = (value: any): number => {
  // @ts-ignore
  if (typeof value === Number) {
    return value
  }
  const _val = parseFloat(value)
  if (isNaN(_val)) {
    return 0
  }
  return _val
}