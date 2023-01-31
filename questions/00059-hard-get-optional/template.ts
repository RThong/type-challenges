type GetOptional<T extends Record<string, unknown>> = {
  [key in keyof T as T[key] extends Required<T>[key] ? never : key]: T[key]
}
