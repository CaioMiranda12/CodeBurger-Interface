import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://remake-dev-code-burger-3-production.up.railway.app/'
})

apiCodeBurger.interceptors.request.use(async configs => {
  const userData = await localStorage.getItem('codeburger:userData')

  const token = userData && JSON.parse(userData).token

  configs.headers.authorization = `Bearer ${token}`

  return configs
})

export default apiCodeBurger
