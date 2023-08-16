import API from 'services/api';
import axios from 'axios';

const instance = axios.create({
  baseURL: API,
  timeout: 1000,
});

// localStorage에 있는 token을 instance 외부에서 선언하면 비동기로 안가져와짐.
// import할 때 axios를 비동기로 가져오는데, instance 할당과 localstorage가 둘 다 비동기로 가져오면서 그런듯 (자세히 찾아보기)
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
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
      console.log('404 페이지');
    }

    return response;
  },
  async (error) => {
    const accessToken = localStorage.getItem('access_token');
    if (error.response?.status === 401) {
      error.config.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.request(error.config);
      return response;
    }
    console.log('여긴 interceptot err', error);
    return Promise.reject(error);
  }
);

export default instance;
