type FlipArguments<T extends (...ars: any[]) => unknown> = T extends (
  ...args: infer Args
) => infer R
  ? (...args: Reverse<Args>) => R
  : never
