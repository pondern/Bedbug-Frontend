import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://bedbug-api-31cb0e20044f.herokuapp.com/buildings",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
