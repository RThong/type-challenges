type Reverse<T extends unknown[], U extends unknown[] = []> = T extends [
  ...infer L,
  infer R
]
  ? Reverse<L, [...U, R]>
  : U
