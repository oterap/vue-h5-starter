import request from "@/utils/request";

export default {
  login(data: { name: string; password: string }) {
    return request<{ token: string }>({ url: "/login", method: "post", data });
  },
};
