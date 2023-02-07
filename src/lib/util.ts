import Cookies from "js-cookie"
import { redirectToLogin } from "./redirect"

export const waait = () => new Promise((resolve) => setTimeout(resolve, 1000))

export const generateToken = () => Math.random().toString(36).substring(2)

export function logout() {
  Cookies.remove("token")
  Cookies.remove("sfid")
  redirectToLogin()
}
