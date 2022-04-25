// 可以通过给第二个隐形泛型参数赋初值的形式，来存储一些值让下一次递归使用
type StringToTuple<S extends string> = S extends `${infer A}${infer Rest}`
  ? A extends ""
    ? []
    : [A, ...StringToTuple<Rest>]
  : []

type LengthOfString1<S extends string> = StringToTuple<S>["length"]
