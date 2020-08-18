"use strict";

var _commander = _interopRequireWildcard(require("commander"));

var _create = _interopRequireDefault(require("./create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 引入 commander
// 命令行列表
const actionMap = {
  create: {
    description: '创建新项目',
    alias: 'c'
  }
}; // 添加命令

Object.keys(actionMap).forEach(action => {
  _commander.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
    switch (action) {
      case 'create':
        (0, _create.default)(...process.argv.slice(3));
        break;

      default:
        break;
    }
  });
}); // --version 从 package.json 获取版本号, 并解析命令行参数

const version = require('../package.json').version;

_commander.default.version(version).parse(process.argv); // --help 当命令行后不带参数时，输出帮助信息


if (!process.argv.slice(2).length) {
  _commander.default.outputHelp();
}