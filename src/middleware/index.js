import axios from '@/vendors/axios'

axios.interceptors.request.use((config) => {
  // Custom logic here
  return config
})


export default axios
