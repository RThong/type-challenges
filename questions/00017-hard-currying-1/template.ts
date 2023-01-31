type CurryingHelper<T> = T extends (...args: infer Param) => infer R
  ? Param extends [infer L, ...infer Res]
    ? (val: L) => CurryingHelper<(...args: Res) => R>
    : R
  : never

declare function Currying<T>(fn: T): CurryingHelper<T>
