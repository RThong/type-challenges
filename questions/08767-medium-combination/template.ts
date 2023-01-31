// 全排列  首先是两两获取目标联合类型
// 再是通过联合类型分配的机制配合Exclude来排列组合所有子类型
type UnionCombination<A extends string, B extends string> =
  | A
  | B
  | `${A} ${B}`
  | `${B} ${A}`
type CombinationTemp<A extends string, B extends string = A> = B extends A
  ? UnionCombination<B, CombinationTemp<Exclude<A, B>>>
  : never

type Combination<T extends string[]> = CombinationTemp<T[number]>
