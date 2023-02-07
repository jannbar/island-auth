import Cookies from "js-cookie"

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
