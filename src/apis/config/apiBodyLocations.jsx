import axios from "axios";

// export const URL = import.meta.env.VITE_API_URL;
// export const URL = "https://api.devsolutionsa.com";
export const URL = "https://api.academiaencinas.com";

export const apiBodyLocations = axios.create({
  baseURL: URL,
});