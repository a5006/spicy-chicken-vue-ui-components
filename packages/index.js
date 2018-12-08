import slCheckBox from './src/sl-checkbox/index'
const components = [slCheckBox]
const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  slCheckBox
}