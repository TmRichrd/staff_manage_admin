import instance from "../utils/request"
export const Login = (data) => {
  return instance.request({
    url:"/login",
    method:"post",
    data
  })
}