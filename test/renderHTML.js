const template = require('../template/babel')
const ReactDOMServer = require('react-dom/server')

console.log(ReactDOMServer.renderToString(template({})))
