import axios from 'axios'

function getCsrfToken() {
  const token = document.querySelector('meta[name="csrf-token"]')
  return token ? token.getAttribute('content') : ''
}

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "X-CSRF-Token": getCsrfToken(),
    "Content-Type": "application/json"
  }
})

export default api
