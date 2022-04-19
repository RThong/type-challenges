// type TupleToNestedObject<
//   T extends string[],
//   U,
//   K extends Record<string, any> = U
// > = T extends []
//   ? K
//   : T extends [...infer L, infer R]
//   ? L extends string[]
//     ? TupleToNestedObject<
//         L,
//         U,
//         { [key in R as R extends string ? R : never]: K }
//       >
//     : never
//   : never

// 在 {[key in A as xxx]}的场景中，如果as指定为基础类型等范围较大的类型 结果相当于{[key:string]}
// 可以通过{[key in A as A extends xxx ? A : never]}的形式来缩小范围
type TupleToNestedObject<T extends string[], U> = T extends [
  infer L,
  ...infer R
]
  ? {
      [key in L as L extends string ? L : never]: R extends string[]
        ? TupleToNestedObject<R, U>
        : never
    }
  : U

// type A = ["a"]

// type B<T> = T extends [infer R]
//   ? {
//       [key in R as R extends string ? R : never]: 123
//     }
//   : never
// type C = B<A>

// const bb: B<A> = {
//   a: 123,
// }
