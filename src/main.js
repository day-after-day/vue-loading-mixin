import Vue from 'vue';
import App from './App.vue';


import vueLoadingMixin from 'vue-loading-mixin'
Vue.use(vueLoadingMixin, {
    loadingName: 'loadingM'
})

new Vue({
    el: '#app',
    render: h => h(App)
})
