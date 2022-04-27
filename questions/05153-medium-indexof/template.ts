type IndexOf<T extends unknown[], U, K extends T[number][] = []> = T extends [
  infer L,
  ...infer Res
]
  ? L extends U
    ? K["length"]
    : IndexOf<Res, U, [...K, L]>
  : -1
