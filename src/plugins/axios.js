// src/plugins/axios.js

import axios from 'axios';

// Configuration par défaut d'Axios
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Intercepteur de requête
axios.interceptors.request.use(config => {
    // Vous pouvez ajouter des en-têtes personnalisés ici
    return config;
}, error => {
    return Promise.reject(error);
});

// Intercepteur de réponse
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        // Gérer les erreurs 401 (non autorisé)
    }
    return Promise.reject(error);
});

export default axios;
