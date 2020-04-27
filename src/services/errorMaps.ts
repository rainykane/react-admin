export interface ErrMapItem {
  [key: number]: string;
}

export const codeMapsError: ErrMapItem = {
  404: "无请求地址。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};
