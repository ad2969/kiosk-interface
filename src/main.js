import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
// TODO: Not sure why I might need this, maybe to pass it to different pages in the future? - stanford
// import { firestorePlugin } from 'vuefire';

require('video.js/dist/video-js.css');

Vue.config.productionTip = false
// Vue.use(firestorePlugin);

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')