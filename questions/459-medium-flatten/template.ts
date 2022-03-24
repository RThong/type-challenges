// type MyShift<T extends unknown[]> = T extends []
//   ? []
//   : T extends [infer _, ...infer Rest]
//   ? Rest
//   : never

// type Flatten<T extends unknown[]> = T extends []
//   ? []
//   : T extends [infer A, ...infer Rest]
//   ? A extends unknown[]
//     ? [...Flatten<A>, ...Flatten<Rest>]
//     : [A, ...Flatten<Rest>]
//   : [T[0], ...MyShift<T>]

type Flatten<T extends unknown[], U extends unknown[] = []> = T extends [
  infer A,
  ...infer Rest
]
  ? A extends unknown[]
    ? Flatten<Rest, [...U, ...Flatten<A>]>
    : Flatten<Rest, [...U, A]>
  : U
