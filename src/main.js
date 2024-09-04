import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import config from './presets/config';

const app = createApp(App);
app.component('AutoComplete', AutoComplete);
app.use(PrimeVue, {
    unstyled: true,
    pt: config
});
app.mount('#app');