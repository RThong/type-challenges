type Mutable<T extends { readonly [key: string]: any }> = {
  -readonly [key in keyof T]: T[key]
}
