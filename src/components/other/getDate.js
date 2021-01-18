export const getDate = () => {
  const date = new Date()
  return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
};
export const getTommorowDate = () => {
  const tomorrow = new Date(Date.now() + (24 * 60 * 60 * 1000));
  return tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1 < 10 ? '0' + (tomorrow.getMonth() + 1) : tomorrow.getMonth() + 1) + '-' + (tomorrow.getDate() < 10 ? '0' + tomorrow.getDate() : tomorrow.getDate())
};