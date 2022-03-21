// type MyParameters<T extends (...args: unknown[]) => unknown> = T extends (
//   ...args: infer P
// ) => unknown
//   ? P
//   : never

type MyParameters<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer P
) => unknown
  ? P
  : never
