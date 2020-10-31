export const loadData = (key) => {
   return JSON.parse(localStorage.getItem(key))
}

export const saveData = (key, data) => {
   return localStorage.setItem(key, JSON.stringify(data))
}