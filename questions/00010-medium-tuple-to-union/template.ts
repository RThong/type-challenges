type TupleToUnion<T extends unknown[]> = T extends (infer R)[] ? R : never

// type TupleToUnion<T extends unknown[]> = T[number]
