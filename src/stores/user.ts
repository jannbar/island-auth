import { atom, onMount } from "nanostores"
import { redirectToLogin } from "../lib/redirect"
import { getAuthenticatedUser, User } from "../lib/useUser"

export const userStore = atom<User | null>(null)
export const optionalUser = atom<User | null>(null)

onMount(userStore, () => {
  getAuthenticatedUser().then((data) => {
    if (!data.authenticated) {
      redirectToLogin()
      return
    }

    userStore.set(data.user)
  })
})

onMount(optionalUser, () => {
  getAuthenticatedUser().then((data) => {
    optionalUser.set(data.user)
  })
})
