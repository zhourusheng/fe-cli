"use strict";

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入 commander
// 从 package.json 获取版本号, 并解析命令行参数
const version = require('../package.json').version;

_commander.default.version(version).parse(process.argv);