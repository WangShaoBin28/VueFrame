const cusImport = require('./_import_' + process.env.NODE_ENV)
export default [
  {
    path: '/',
    name: 'demo_hello',
    component: cusImport('demo/hello')
  }, {
    path: '/hello',
    name: 'demo_hello2',
    component: cusImport('demo/hello2')
  }
]
