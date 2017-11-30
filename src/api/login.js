import service from '@/utils/fetch'
export function login(username, password) {       //fetch  promise用法
  return service({
    url: '/loginCheck',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return service({
    url: '/info',
    method: 'post',
    params: { token }
  })
}

export function logout() {
  return service({
    url: '/logout',
    method: 'post'
  })
}