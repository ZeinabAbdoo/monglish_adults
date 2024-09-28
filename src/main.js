import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import your store
import axios from 'axios';

axios.get('/api/csrf-token')
  .then(response => {
    const csrfToken = response.data.csrfToken;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
  })
  .catch(error => {
    console.error('Error fetching CSRF token:', error);
  });

// Add a request interceptor to include the Authorization token
axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');