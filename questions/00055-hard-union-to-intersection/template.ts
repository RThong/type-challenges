// 要满足((arg: U) => any | (arg: V) => any) extends (arg: infer I) => any
// 则I必须满足 I extends U&V
// https://github.com/type-challenges/type-challenges/issues/122#issuecomment-724527818
type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never

type E = UnionToIntersection<(() => "foo") | ((i: 42) => true)>

// 联合类型的分配中途被()包裹后，后续的extends将作为整体去比较

// type GGG<U extends number> = (U extends any ? `nima ${U}` : never) extends
//   | "nima 1"
//   | "nima 2"
//   | "nima 3"
//   ? U
//   : never

// extends链会让联合类型中的每个子类型从头一直到尾部

// type GGG1<U extends number> = U extends any
//   ? `nima ${U}` extends "nima 1"
//     ? U
//     : never
//   : never

// type TTT1 = GGG<1 | 2>
// type TTT2 = GGG1<1 | 2>
