import http from 'axios'

http.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
})

http.interceptors.request.use((config) => {
  // Custom logic here
  return config
})

export default http
