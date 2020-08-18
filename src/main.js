// 引入 commander
import program from 'commander'

// 从 package.json 获取版本号, 并解析命令行参数
const version = require('../package.json').version

program.version(version).parse(process.argv)
