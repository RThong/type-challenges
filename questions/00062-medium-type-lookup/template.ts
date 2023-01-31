// 基于下面这些注释，当U是联合类型的时候能满足要求
// 更为通用的LookUp, 根据对象中的key对应的值取联合类型中目标类型
// 只有当 T extends *** 才能进行联合类型分配  T['key']不行！
type LookUp<T, K extends string, U> = T extends { [key in K]: U } ? T : never

type MyLookUp<T, K extends string> = LookUp<T, "type", K>

// U = Cat | Dog
// 因为是泛型参数传入的联合类型，所以等价于下面这句
// (Cat extends {type: T} ? Cat : never) | (Dog extends {type: T} ? Dog : never)
// never | Dog
// Dog

// 普通联合类型的extends不同
// type DD = 'x' | 'y' extends 'x' ? string: number

// type AA<T> = T  extends 'x' ? string: number

// type P = AA<'x' | 'y'>
