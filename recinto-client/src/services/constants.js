const API_URL = `${import.meta.env.VITE_API_URL}`;
const BASE_URL = API_URL.replace(/\/api\/?$/, '');

export default {
  HOST: API_URL,
  IMAGE_HOST: BASE_URL
};