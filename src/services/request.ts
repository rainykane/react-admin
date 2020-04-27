import request from "umi-request";

import { message } from "antd";

import { codeMapsError } from "./errorMaps";

// request interceptor, change url or options.
request.interceptors.request.use((url, options) => {
  message.loading({ content: "Loading...", duration: 0 });
  return {
    url: `${url}`,
    options: { ...options, interceptors: true }
  };
});

// Same as the last one
request.interceptors.request.use(
  (url, options) => {
    return {
      url: `${url}`,
      options: { ...options, interceptors: true }
    };
  },
  { global: true }
);

// response interceptor, chagne response
request.interceptors.response.use((response, options) => {
  // response.headers.append('interceptors', 'yes yo');
  return response;
});

// handling error in response interceptor
request.interceptors.response.use(response => {
  console.log(response);
  setTimeout(() => {
    message.destroy();
    response.status === 200 && message.success("请求成功");
    response.status !== 200 && message.error(codeMapsError[response.status]);
  }, 350);
  return response;
});

// clone response in response interceptor
request.interceptors.response.use(async response => {
  const data = await response.clone().json();
  console.log(data);

  if (data && data.NOT_LOGIN) {
    location.href = "登录url";
  }
  return response;
});
const api = request;
export default api;
