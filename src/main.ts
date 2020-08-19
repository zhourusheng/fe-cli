import commander from 'commander'
import chalk from 'chalk'

import create from './create'
import * as T from './type'

const packageJson = require('../package.json')

export const init = () => {
  commander
    .version(packageJson.version)
    .description('A useful frontend CLI')
    .usage(`${chalk.green('<command> [options]')}`)

  commander
    .command('create <project-name>')
    .description('create a new project')
    .option('-g, --git [path]', 'create a new repository?')
    .action(name => create(name))

  commander.parse(process.argv)
}
