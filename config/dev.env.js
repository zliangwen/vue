var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_API: '"http://www.easy-mock.com/mock/59bb7d44e0dc663341ab7963/example"',
  //BASE_API:'"http://192.168.6.252:7777/demo"',
	//BASE_API :'"http://www.easy-mock.com/mock/5a15110cb2301a1fb73f4afb/example"'
	//BASE_API:'"http://www.easy-mock.com/mock/5a0e5356ec27b206e2af0163/example"'
	BASE_API:'"http://192.168.6.246:9191"'
})
