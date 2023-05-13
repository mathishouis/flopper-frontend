import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, Pinia } from "pinia";
import axios from "axios";
import router from "./router";

axios.defaults.baseURL = "http://localhost:8080/api/v1";
axios.defaults.withCredentials = true;

const pinia: Pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
