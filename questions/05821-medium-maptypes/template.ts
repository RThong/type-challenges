// 对象map的话就在值中进行extends判断
// filter的话就在key中进行extends判断
type MapTypes<T, R extends { mapFrom: unknown; mapTo: unknown }> = {
  [K in keyof T]: T[K] extends R["mapFrom"]
    ? // 在联合类型中找到具体的目标类型
      LookUp<R, "mapFrom", T[K]>["mapTo"]
    : T[K]
}

// type MapTypes<
//   T extends Record<string, unknown>,
//   R extends { mapFrom: unknown; mapTo: unknown }
// > = Copy<
//   (IsUnion<R["mapFrom"]> extends true
//     ? Intersect<Step1<T, R>>
//     : {
//         [key in keyof T as T[key] extends R["mapFrom"]
//           ? key
//           : never]: R["mapTo"]
//       }) & {
//     [key in keyof T as T[key] extends R["mapFrom"] ? never : key]: T[key]
//   },
//   keyof T
// >

// type Step1<
//   T extends Record<string, unknown>,
//   R extends { mapFrom: unknown; mapTo: unknown }
// > = R extends R
//   ? {
//       [key in keyof T as T[key] extends R["mapFrom"] ? key : never]: R["mapTo"]
//     }
//   : never

// type F = Step1<
//   { name: string; date: Date },
//   { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
// >

// type G = Intersect<F>
// type Intersect<T> = (T extends any ? (x: T) => 0 : never) extends (
//   x: infer R
// ) => 0
//   ? R
//   : never
// type Q = MapTypes<
//   { name: string; date: Date },
//   { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
// >

// type A = { a: string; b: number }
// type B = { a: string; b: null }

// type C = A | B
// type D = { a: string; b: number | null }

// type AAA = E<C>
