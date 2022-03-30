export function debounce(fn: any, delay: number, immediate = false) {
  let timer: any = null
  let isInvoke = false

  const _execFunWithError = function (
    fn: any,
    thisArg: any,
    args: any[],
    resolve: any,
    reject: any
  ) {
    try {
      const result = fn.apply(thisArg, args)
      resolve(result)
    } catch (err) {
      reject(err)
    }
  }

  const _debounce = function (this: any, ...args: any[]) {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer)
      }

      if (immediate && !isInvoke) {
        _execFunWithError(fn, this, args, resolve, reject)
        isInvoke = true
      } else {
        timer = setTimeout(() => {
          _execFunWithError(fn, this, args, resolve, reject)
          timer = null
          isInvoke = false
        }, delay)
      }
    })
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}
