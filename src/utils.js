export const generateUID = () => {
  let finalId = ''

  for (let i = 0; i < 4; i++) {
    finalId += `${i < 3 ? `${Math.random().toString(16).substr(2, 10)}-` : `${Math.random().toString(16).substr(2, 10)}`}`
  }

  return finalId
}