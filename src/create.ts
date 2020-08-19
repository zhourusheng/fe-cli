import inquirer from 'inquirer'
import ora from 'ora'

import { isFoldExist, errConsole } from './utils'
import * as T from './type'

const create = async (projectName?: string) => {
  // 无文件名提示
  if (projectName === undefined) {
    errConsole('please enter the project name')
    return
  }

  // 文件名重复提示
  // @ts-ignore
  if (isFoldExist(projectName)) {
    errConsole('the directory already exists, please rename it')
    return
  }

  // inquirer.prompt 交互式命令行
  const promptList: T.promptItem[] = [
    {
      type: 'list',
      name: 'frame',
      message: 'please choose this project template',
      choices: ['vue', 'react']
    },
    {
      type: 'input',
      name: 'description',
      message: 'please enter the project description'
    },
    {
      type: 'input',
      name: 'author',
      message: 'please enter the author name'
    }
  ]

  inquirer.prompt(promptList).then(answer => {
    const { frame } = answer
  })
}

export default create
