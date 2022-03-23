// 利用'A'|'B'这样的联合类型参数泛型 extends 'A'|'B' = XXX    可以让左边联合类型的每个子项都去走右边的逻辑
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : []
