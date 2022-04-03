type PickByType<T extends Record<string, any>, U> = {
  [key in keyof T as T[key] extends U ? key : never]: T[key]
}
