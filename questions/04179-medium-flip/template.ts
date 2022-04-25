// key可以通过in 来指定范围 ， 再通过as来指定具体的值
// key通过in获取的范围可以供右边value来使用
// [K in keyof T as `${T[K]}`]: K;
type FlipTemp<
  T extends Record<string, number>,
  U extends number | string
> = keyof {
  [key in keyof T as `${T[key]}` extends `${U}` ? key : never]: T[key]
}

type Flip<T extends Record<string, any>> = {
  [key in `${T[keyof T]}`]: FlipTemp<T, key>
}

// type A = { a: 1; b: 2; c: 2 }

// type GetKeyByValue<T extends Record<string, number>, U> = keyof {
//   [key in keyof T as T[key] extends U ? key : never]: T[key]
// }

// type C = GetKeyByValue<A, 2>

// type Flip<T extends Record<string, any>> = {
//   [K in keyof T as `${T[K]}`]: K;
// };
