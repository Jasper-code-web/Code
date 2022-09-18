//minimist用来解析命令行参数
const args = require("minimist")(process.argv.slice(2))
const {resolve} = require("path") //路径解析
const {build} = require("esbuild") //es6打包。支持ts，不会校验ts

console.log('args',args)
const target = args._[0] || "reactivity"
const format = args.f || "global"

//开发环境单个打包
const pkg = require(resolve(__dirname, `../package/${target}/package.json`))

//打包模式
const outputFormat = format.startsWith("global") ? "iife" : format === "cjs" ? "cjs" : "esm"

//打包地址
const outfile = resolve(__dirname, `../package/${target}/dist/${target}.${format}.js`)

build({
    entryPoints: [resolve(__dirname, `../package/${target}/src/index.ts`)],
    outfile,
    bundle: true, //把所有的包全部打包到一起
    sourcemap: true, 
    format: outputFormat, //打包输出的文件格式
    globalName: pkg.buildOptions?.name, //打包的全局的名称
    platform: format === "cjs" ? 'node' : "browser", //平台
    watch: { //监控文件的变化
        onRebuild(error) {
            if(!error) console.log('error',error)
        }
    }
}).then(() => {
    console.log("build success")
})