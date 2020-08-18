// 引入 commander
import program from 'commander'

import create from './create'

import * as T from './type'

// 命令行列表
const actionMap: T.actionType = {
  create: {
    description: '创建新项目',
    alias: 'c'
  }
}

// 添加命令
Object.keys(actionMap).forEach(action => {
  program
    .command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      switch (action) {
        case 'create':
          create(...process.argv.slice(3))
          break
        default:
          break
      }
    })
})

// --version 从 package.json 获取版本号, 并解析命令行参数
const version = require('../package.json').version
program.version(version).parse(process.argv)

// --help 当命令行后不带参数时，输出帮助信息
if (!process.argv.slice(2).length) {
  program.outputHelp()
}
