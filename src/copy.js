var fs = require('fs')
const path = require('path')
const dir = process.cwd()
/**
 * 生成文件全路径
 * @param {*} p
 */
const makefullPath = p => path.join(dir, p)

/**
 * 创建目录
 * @param {*} path
 */
const createDirectory = function (path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}

/**
 * 复制文件夹
 * @param {*} sourceDir
 * @param {*} targetDir
 */
const copy = function (sourceDir, targetDir) {
  const files = fs.readdirSync(sourceDir)
  files.map(file => {
    const inputFile = `${sourceDir}/${file}`
    const outputFile = `${targetDir}/${file}`
    const fullPath = makefullPath(inputFile)
    const fileStat = fs.statSync(fullPath)
    if (fileStat.isDirectory()) {
      createDirectory(makefullPath(outputFile))
      copy(inputFile, outputFile)
    } else {
      console.log(`${inputFile} -> ${outputFile}`)
      fs.copyFileSync(inputFile, outputFile)
    }
  })
}

module.exports = copy
