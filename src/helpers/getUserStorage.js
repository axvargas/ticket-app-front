export const getUserStorage = () => {
  const user = localStorage.getItem('user')
  const desk = localStorage.getItem('desk')
  return { user, desk }
}