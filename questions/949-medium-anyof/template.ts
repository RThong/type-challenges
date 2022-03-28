// type FalsyValue = 0 | "" | false | [] | null | undefined

// type AnyOf<T extends readonly unknown[]> = T extends [infer R, ...infer Rest]
//   ? R extends FalsyValue
//     ? AnyOf<Rest>
//     : {} extends R
//     ? AnyOf<Rest>
//     : true
//   : false

// object表示非基础类型

type FalsyValue =
  | 0
  | ""
  | false
  | []
  | null
  | undefined
  | { [key in any]: never }

type AnyOf<T extends readonly unknown[]> = T[number] extends FalsyValue
  ? false
  : true

// let pp: { [key: string]: never }

// pp = { prop: 0 } // OK
// pp = [] // OK
// pp = 42 // OK
// pp = "string" // OK
// pp = false // OK
// pp = null // Error
// pp = undefined // Error
// pp = {}
// pp.toString()
// let x: {} = {
//   toString() {
//     return 2
//   },
// }
// let y: Object = {
//   toString() {
//     return 2
//   },
// }

// let aa: object

// aa = () => {}

// aa = []

// const fn = <T extends unknown>(props: T) => {}

// let obj = new Object()

// const num = new Number()
// type DDD = typeof num extends Object ? number : string

// type Q1 = {
//   a: string
//   b: number
// }

// type Q2 = {
//   a: string
// }
// type EEE = Q1 extends Q2 ? number : string

// let q1: Q1 = {
//   a: "1",
//   b: 1,
// }

// let q2: Q2 = {
//   a: "1",
// }

// q2 = q1
// type Point = {
//   x: number
//   y: number
// }

// type RRR = string | number

// type TTT = string

// type result3 = TTT extends RRR ? true : false

// let g1: RRR = 1

// let g2 = "1"

// g1 = g2

// // g2 = g1

// type result4 = object extends {} ? true : false
// type result5 = {} extends object ? true : false

// let res1: {} = 1
// let res2: object = {}

// res2 = res1
