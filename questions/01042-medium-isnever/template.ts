// 通过包裹[]的形式防止Distributive Conditional Types  分配条件类型  直接对联合类型的泛型类型比较
type IsNever<T extends unknown> = [T] extends [never] ? true : false
