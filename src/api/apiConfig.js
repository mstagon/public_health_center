import axios from "axios";
const apiConfig = axios.create({
  baseURL: "http://180.65.58.182:8000/",
});
export default apiConfig;
