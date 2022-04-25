type ReplaceKeys<
  U extends { [key: string]: unknown },
  T extends string,
  Y extends { [key: string]: unknown }
> = {
  [key in keyof U]: key extends keyof Y
    ? Y[key]
    : key extends T
    ? never
    : U[key]
}
