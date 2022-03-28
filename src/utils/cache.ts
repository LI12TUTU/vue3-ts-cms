class Cache {
  storage: Storage

  constructor(isLocal = true) {
    this.storage = isLocal ? window.localStorage : window.sessionStorage
  }

  setItem(key: string, value: any) {
    if (value === null || value === undefined) {
      throw new TypeError("value can not be null or undefined")
    }

    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index: number) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}

const localCache = new Cache()
const sessionCache = new Cache(false)

export { localCache, sessionCache }
