type Merge<
  F extends { [key: string]: unknown },
  S extends { [key: string]: unknown }
> = {
  [key in keyof F | keyof S]: key extends keyof S
    ? S[key]
    : key extends keyof F
    ? F[key]
    : never
}
