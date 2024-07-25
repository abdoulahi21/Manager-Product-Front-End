import './assets/style.css'
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import axios from './plugins/axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);

app.config.globalProperties.$axios = axios; // Ajouter Axios aux propriétés globales de Vue

app.use(router).mount('#app');
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
