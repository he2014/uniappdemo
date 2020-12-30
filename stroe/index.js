import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const modulesFile = require.context('./modules', true, /\w+\.js/)
const modules = modulesFile.keys().reduce((module, modulePath) => {
	 const moduleName = modulePath.match(/\.\/(\w+)\.js/)[1]
	 const path = modulesFile(modulePath).default
	 module[moduleName] = path
	return module
}, {})
console.log(modules)
const store = new Vuex.Store({
	modules
})
export default store