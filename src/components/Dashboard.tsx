import { useStore } from "@nanostores/react"
import { useUser } from "../lib/useUser"
import { logout } from "../lib/util"
import { userStore } from "../stores/user"

export default function Dashboard() {
  const user = useStore(userStore)

  if (!user) {
    return <p aria-busy>Loading...</p>
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>User Details</h2>
      <p>First name: {user.firstname}</p>
      <p>Last name: {user.lastname}</p>
      <p>E-Mail: {user.email}</p>
      <button onClick={logout}>Log out</button>
    </div>
  )
}
