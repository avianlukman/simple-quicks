import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);

app.mount('#app');