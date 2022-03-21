// 联合类型会自动分发条件
// 例如 T extends U ? X : Y, T 可能是 A | B 的联合类型, 那实际情况就变成(A extends U ? X : Y) | (B extends U ? X : Y)
type MyExclude<T, U> = T extends U ? never : T
