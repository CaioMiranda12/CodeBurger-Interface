import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeBurger.interceptors.request.use(async configs => {
  const userData = await localStorage.getItem('codeburger:userData')

  const token = userData && JSON.parse(userData).token

  configs.headers.authorization = `Bearer ${token}`

  return configs
})

export default apiCodeBurger
