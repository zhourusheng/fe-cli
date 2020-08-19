import inquirer from 'inquirer'

import { isFoldExist, errConsole } from './utils'
import * as T from './type'

const create = async (projectName?: string) => {
  // 无文件名提示
  if (projectName === undefined) {
    errConsole('请输入项目名称(Please enter the project name.)')
    return
  }

  // 文件名重复提示
  // @ts-ignore
  if (isFoldExist(projectName)) {
    errConsole(
      '文件夹已存在，请重新命名(The folder already exists, please rename it.)'
    )
    return
  }

  // inquirer.prompt 交互式命令行
  const promptList: T.promptItem[] = [
    {
      type: 'list',
      name: 'frame',
      message: 'Please choose this project template',
      choices: ['vue', 'react']
    }
  ]

  inquirer.prompt(promptList).then(answer => {
    const { frame } = answer
    console.log(frame)
  })
}

export default create
