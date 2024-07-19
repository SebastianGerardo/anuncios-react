import axios from "axios";

// export const URL = import.meta.env.VITE_API_URL;
// export const URL = "https://api.devsolutionsa.com";
export const URL = "https://api-pagina-anuncios-production.up.railway.app";

export const apiBody = axios.create({
  baseURL: URL,
});