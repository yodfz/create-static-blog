#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const ora = require('ora')
const copy = require('./copy')
const markdown = require('./markdown')

const dir = process.cwd()
const spinner = ora('blog系统开始准备打包事项')

spinner.start('加载配置文件')
const config = path.join(dir, './config/index.js')
spinner.succeed('加载配置文件')

spinner.info('复制public至dist')
copy('./public', './dist')
spinner.succeed('复制完成')

spinner.info('准备处理markdown文档')
const allMarkdown = markdown()
fs.writeFileSync(
  path.join(process.cwd(), './dist/data.js'),
  `export default ${JSON.stringify(allMarkdown)}`
)
fs.writeFileSync(
  path.join(process.cwd(), './dist/list.js'),
  `export default ${JSON.stringify(allMarkdown)}`
)
spinner.succeed('遍历文档，并且生成html文件')

spinner.succeed('完成编译')
