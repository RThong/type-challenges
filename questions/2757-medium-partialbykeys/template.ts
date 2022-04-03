type MapObj<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key]
}

// {a:1,b:2}  和  {a:1} & {b:2}不一样
type PartialByKeys<T extends Record<string, any>, K extends string = never> = [
  K
] extends [never]
  ? Partial<T>
  : MapObj<Omit<T, K> & { [key in Extract<keyof T, K>]?: T[key] }>

// 更好的写法
// type Merge<T, U> = Pick<T & U, keyof (T & U)>

// type PartialByKeys<T, K = keyof T> = Merge<
//   Pick<Partial<T>, Extract<keyof T, K>>,
//   Pick<T, Exclude<keyof T, K>>
// >
