// 基于下面这些注释，当U是联合类型的时候能满足要求
type LookUp<U, T extends string> = U extends { type: T } ? U : never

// U = Cat | Dog
// 因为是泛型参数传入的联合类型，所以等价于下面这句
// (Cat extends {type: T} ? Cat : never) | (Dog extends {type: T} ? Dog : never)
// never | Dog
// Dog

// 普通联合类型的extends不同
// type DD = 'x' | 'y' extends 'x' ? string: number

// type AA<T> = T  extends 'x' ? string: number

// type P = AA<'x' | 'y'>
