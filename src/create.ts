import inquirer from 'inquirer'
import ora from 'ora'

import tempalteList from './template'
import { isFoldExist, errConsole } from './utils'
import * as T from './type'

const create = async (projectName?: string) => {
  // 无文件名提示
  if (projectName === undefined) {
    errConsole('please enter the project name')
    return
  }

  // 文件名重复提示
  if (isFoldExist(projectName)) {
    errConsole('the directory already exists, please rename it')
    return
  }

  // 选择项目模板
  const choices = tempalteList.map(item => item.key)

  const { type } = await inquirer.prompt({
    type: 'list',
    name: 'type',
    message: 'please choose a project template',
    choices
  })

  const choosedTemplate = tempalteList.find(item => item.key === type)

  const url = choosedTemplate?.url

  const spinner = ora(' ⚡️ git clone repository...')
  spinner.start()

  setTimeout(() => {
    spinner.succeed('success')
  }, 3000)
}

export default create
