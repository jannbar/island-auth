export function redirect(path: string) {
  window.location.replace(path)
}

export function redirectToLogin() {
  redirect("/")
}
