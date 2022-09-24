import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('user');
    config.headers['Authorization'] = `bearer ${token}`;
    return config;
});

export default axios;

