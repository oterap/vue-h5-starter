import axios, { AxiosRequestConfig } from "axios";

interface CustomResponse<T> {
  code: number;
  data: T;
  msg?: string;
}

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = <T>(config: AxiosRequestConfig): Promise<CustomResponse<T>> => {
  return new Promise((resolve, reject) => {
    service
      .request<CustomResponse<T>>(config)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export default request;
