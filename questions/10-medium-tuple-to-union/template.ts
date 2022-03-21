type TupleToUnion<T extends unknown[]> = T extends (infer R)[] ? R : never
