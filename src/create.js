import symbol from 'log-symbols'
import chalk from 'chalk'

const create = async (projectName) => {
  if (projectName === undefined) {
    console.log(symbol.error, chalk.red('请输入项目名称'))
    return
  }
}

export default create