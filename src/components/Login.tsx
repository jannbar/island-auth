import React from "react"
import Cookies from "js-cookie"
import { generateToken, waait } from "../lib/util"
import { redirect } from "../lib/redirect"
import { useStore } from "@nanostores/react"
import { optionalUser } from "../stores/user"

async function login() {
  const token = generateToken()
  const sfid = generateToken()

  Cookies.set("token", token)
  Cookies.set("sfid", sfid)

  await waait()
}

export function LoginForm() {
  const isLoggedIn = useStore(optionalUser)
  const [isLoading, setIsLoading] = React.useState(false)

  if (isLoggedIn) {
    redirect("/dashboard")
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)
    await login()
    setIsLoading(false)
    redirect("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-Mail" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" aria-busy={isLoading}>
        Login
      </button>
    </form>
  )
}
