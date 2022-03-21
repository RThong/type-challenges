type Last<T extends unknown[]> = T extends [...infer Rest, infer R] ? R : never
