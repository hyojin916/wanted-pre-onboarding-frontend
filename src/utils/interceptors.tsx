import API from 'services/api';
import axios from 'axios';
import accessToken from './getTocken';

const instance = axios.create({
  baseURL: API,
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('404 페이지로 넘어가야 함!');
    }

    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      error.config.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  }
);

export default instance;
