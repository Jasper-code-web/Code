//minimist用来解析命令行参数
const args = require("minimist")(process.argv.slice(2))
const {resolve} = require("path") //路径解析
