type FlattenOnce<T extends unknown[], U extends unknown[] = []> = T extends [
  infer L,
  ...infer R
]
  ? L extends unknown[]
    ? FlattenOnce<R, [...U, ...L]>
    : FlattenOnce<R, [...U, L]>
  : U

// T[number]可以获得数组值的联合类型
type TupleHasArr<T extends unknown[]> = Extract<
  T[number],
  unknown[]
> extends never
  ? false
  : true

type FlattenDepth<
  T extends unknown[],
  U extends number = 1,
  // 通过数组来记录次数
  K extends unknown[] = ["temp"]
> = K["length"] extends U
  ? FlattenOnce<T>
  : TupleHasArr<T> extends true
  ? FlattenDepth<FlattenOnce<T>, U, [...K, "temp"]>
  : T
