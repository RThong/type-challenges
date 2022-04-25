type Require<T extends Record<string, any>> = {
  [key in keyof T]-?: T[key]
}
// 用临时泛型去保存联合类型，在通过U extends U的形式让联合类型中的每一项都去走后面的流程
// 分配联合类型中， 不管 ['a'] extends ['a'|'b']  还是 'a' extends 'a'|'b'都是成立的
type ObjectEntries<T extends Record<string, any>, U = keyof T> = U extends U
  ? [U] extends [keyof T] // 让ts知道 U是T的key的集合
    ? [U, Require<T>[U]]
    : never
  : never

interface Model {
  name: string
  age: number
  locations: string[] | null
}
