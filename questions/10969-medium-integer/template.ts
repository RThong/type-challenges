type AllZero<T extends string> = T extends `${infer L}${infer R}` ?
  L extends '0' ? AllZero<R> : false : never

type Integer<T extends number> = number extends T ? never : (`${T}` extends `${infer L}.${infer R}`
  ? (AllZero<R> extends true ? L : never): T)

// '1.1' === `${1.1}`
// '1.0' !== `${1.0}`
// 数字的1.0就等于1会直接被转成1

// type Integer<T extends number> =
//   number extends T?
//     never:
//       `${T}` extends `${string}.${string}`?never:T
