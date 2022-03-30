// type Bar = { [key: string]: any; bar(): void }  =>   keyof Bar  =>  number | “bar”
// 根据用例这题的需求就是去除对象类型中key不是字面量类型的key
// 字面量类型: https://github.com/zhongsp/TypeScript/blob/dev/zh/handbook/literal-types.md
type LiteralTypeOnly<T extends string | number | boolean | symbol> =
  string extends T ? never : number extends T ? never : T

// type LiteralTypeOnly<T> = T extends `${infer P}` ? P : never

type RemoveIndexSignature<T extends { [key: string | number]: unknown }> = {
  [P in keyof T as LiteralTypeOnly<P>]: T[P]
}
