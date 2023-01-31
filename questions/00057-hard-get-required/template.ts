type GetRequired<T extends Record<string, unknown>> = {
  [key in keyof T as T[key] extends Required<T>[key] ? key : never]: T[key]
}
