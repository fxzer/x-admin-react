export function getItem<T>(key: string): T | null {
  let value = null
  try {
    const result = window.localStorage.getItem(key)
    if (result) {
      value = JSON.parse(result)
    }
  }
  catch (error) {
    console.error(error)
  }
  return value
}

export function getStringItem(key: string): string | null {
  return localStorage.getItem(key)
}

export function setItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}
export function removeItem(key: string): void {
  localStorage.removeItem(key)
}
export function clearItems() {
  localStorage.clear()
}
