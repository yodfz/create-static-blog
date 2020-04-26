const babel = require('@babel/core')

// var babelTransform = jsx =>
//   new Function(
//     'React',
//     'return ' +
//       .code
//   )
// module.exports = babelTransform
module.exports = jsCode => {
  const { code } = babel.transform(
    `const Index = props => {
      const [count, setCount] = useState(0)
      return (
        <div>
          测试{count}
          <button
            onClick={() => {
              setCount(count + 1)
            }}>
            点击+1
          </button>
        </div>
      )
    }
    
    export default Index
    `,
    {
      presets: [
        // react转换插件
        '@babel/preset-react',
        [
          // 先进的代码兼容插件
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              node: '10',
            },
          },
        ],
      ],
      plugins: [
        [
          // 先进的代码兼容插件
          '@babel/plugin-transform-runtime',
          {
            corejs: 3,
            useESModules: true,
          },
        ],
        // 解析 @ 装饰器,它要比 @babel/plugin-proposal-class-properties 后执行
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        // class中的箭头函数中的this指向组件
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        // 转译 ... 扩展符号
        // "@babel/plugin-transform-spread",
        // 解析识别import( )的动态语法，并不是转换
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-react-jsx',
        // async await支持
        // "@babel/plugin-transform-async-to-generator"
      ],
    }
  )
  console.log(code)
  return new Function(
    'React',
    `return function() {
    ${code}
  }`
  )
}
