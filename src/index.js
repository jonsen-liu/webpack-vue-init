import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';

Vue.use(ElementUI);

new Vue({
  el: '#root',
  template: '<App/>',
  components: { App }
});

if (module.hot) {
  module.hot.accept();
}
