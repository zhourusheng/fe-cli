"use strict";

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入 commander
// --version 从 package.json 获取版本号, 并解析命令行参数
const version = require('../package.json').version;

_commander.default.version(version).parse(process.argv); // --help 当命令行后不带参数时，输出帮助信息


if (!process.argv.slice(2).length) {
  _commander.default.outputHelp();
}