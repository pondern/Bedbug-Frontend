import axios from "axios";

let apiURL;

const apiURLs = {
  production: "",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiURL = apiURLs.development;
} else {
  apiURL = apiURLs.production;
}

const api = axios.create({
  baseURL: apiURL,
});

export default api;
