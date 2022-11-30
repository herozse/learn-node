import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";

export default {
  createCategory(data: any) {
    return http.post("/categories", data);
  },
};
