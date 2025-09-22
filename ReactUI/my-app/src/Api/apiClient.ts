import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://localhost:7186/api",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
apiClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      console.log("Unauthorized! Redirect to login");
    } else if (status === 403) {
      console.log("Forbidden! You do not have permission");
    } else if (status >= 500) {
      console.log("Server error! Please try again later");
    } else {
      console.log("Unknown error", error.message);
    }

    return Promise.reject(error); 
  }

  
);

export default apiClient;