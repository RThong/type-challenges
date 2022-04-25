type ExpandObjKey<A extends object, B extends string> = B extends ""
  ? keyof A
  : keyof A | B

type AppendToObject<
  T extends { [key: string]: unknown },
  U extends string,
  V extends unknown
> = {
  [key in ExpandObjKey<T, U>]: key extends U ? V : T[key]
}
