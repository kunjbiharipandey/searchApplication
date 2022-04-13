import { createApp } from 'vue';
import { createStore } from 'vuex'
import Vuelidate  from 'vuelidate';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library } from '@fortawesome/fontawesome-svg-core';
import {  fas } from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import store from './store';


import App from './App.vue';

library.add(fas,fab);

const storeData = createStore(store)

createApp(App).component('fa', FontAwesomeIcon).use(router).use(Vuelidate).use(storeData).mount('#app');
