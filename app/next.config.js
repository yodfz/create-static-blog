const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withTypescript(
  withLess(
    withCss({
      cssModules: true,
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  )
)
