// 可以通过  [key in keyof T as ....]的方式指定key的范围
type OmitByType<T extends Record<string, any>, U> = {
  [key in keyof T as T[key] extends U ? never : key]: T[key]
}

// type A<T> = {
//   [key in keyof T as "a" | "b"]: number
// }

// const aa: A<{ s: 1 }> = {
//   a: 2,
//   b: 1,
// }
