type IsEqual<X, Y> = (<G>() => G extends X ? 1 : 2) extends <G>() => G extends Y
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly unknown[], U> = T extends [infer R, ...infer P]
  ? IsEqual<R, U> extends true
    ? true
    : Includes<P, U>
  : false
