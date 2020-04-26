const fs = require('fs')
const path = require('path')
const marked = require('marked')
const copy = require('./copy')

const dir = process.cwd()
const distDir = path.join(dir, './dist/article')
const markdownDir = path.join(dir, './markdown')
const renderHtml = path.join(dir, './dist/article')
/**
 * 生成文件全路径
 * @param {*} p
 */
const makefullPath = p => path.join(dir, p)
const makeMarkDownfullPath = p => path.join(dir, './markdown', p)

/**
 * 创建目录
 * @param {*} path
 */
const createDirectory = function (path) {
  const dirs = path.split('/')
  dirs[0] = '/'
  for (let i = 1; i < dirs.length; i++) {
    const dirPath = dirs.slice(0, i).join('/')
    if (!fs.existsSync(dirPath)) {
      console.log('mkdir', dirPath)
      fs.mkdirSync(dirPath)
    }
  }
}
const markdownData = []
const buildMarkdown = function () {
  const files = fs.readdirSync(markdownDir)
  files.forEach(file => {
    const fullPath = makeMarkDownfullPath(file)
    const distFullPath = makefullPath(file)
    const fileStat = fs.statSync(fullPath)
    if (fileStat.isDirectory()) {
      // 暴力创建文件夹
      createDirectory(distFullPath)
    } else {
      const extName = path.extname(fullPath)
      console.log(path.basename(fullPath))
      if (extName.toLowerCase() === '.md') {
        const timespan = fileStat.mtime.getTime()
        const markdownHtml = marked(fs.readFileSync(fullPath, 'utf-8'))
        let title = path.basename(fullPath)
        title = title.substr(0, title.length - 3)
        // console.log('markdown', markdownHtml)
        markdownData.push({
          title,
          timespan,
          markdownHtml,
        })
        // 生成html目录
      } else {
        // 同步文件至编译目录
        copy(fullPath, makefullPath(distDir, file))
      }
    }
  })
  // 对数据做一定的处理
  return markdownData.sort((a, b) => a.timespan - b.timespan)
}

module.exports = buildMarkdown
