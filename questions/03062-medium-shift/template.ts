type Shift<T extends unknown[]> = T extends [infer L, ...infer R] ? R : never
