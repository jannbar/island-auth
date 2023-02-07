import Cookies from "js-cookie"
import { useEffect, useState } from "react"

import { redirectToLogin } from "./redirect"

export type User = {
  firstname: string
  lastname: string
  email: string
}

type AuthenticatedUser = {
  authenticated: boolean
  user: User | null
}

export async function getAuthenticatedUser(): Promise<AuthenticatedUser> {
  const token = Cookies.get("token")
  const sfid = Cookies.get("sfid")

  if (!token || !sfid) {
    return {
      authenticated: false,
      user: null,
    }
  }

  return {
    authenticated: true,
    user: {
      firstname: "Luke",
      lastname: "Skywalker",
      email: "luke.skywalker@jedi.gov",
    },
  }
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser()

      if (!authenticated) {
        redirectToLogin()
        return
      }

      setUser(user)
      setIsAuthenticated(authenticated)
    }

    getUserDetails()
  }, [])

  return { user, isAuthenticated }
}
