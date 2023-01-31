type RequiredByKeys<T extends Record<string, any>, U = keyof T> = Copy<
  T & Required<Pick<T, U extends keyof T ? U : never>>
>

type Copy<T> = {
  [key in keyof T]: T[key]
}
