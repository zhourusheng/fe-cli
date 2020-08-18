import symbol from 'log-symbols'
import chalk from 'chalk'

const create = async (projectName?: string) => {
  if (projectName === undefined) {
    console.log(symbol.error, chalk.red('请输入项目名称(Please enter the project name.)'))
    return
  }
}

export default create