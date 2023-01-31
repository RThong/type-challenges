type Subsequence<T extends number[], K extends number[] = []> = T extends [
  infer L,
  ...infer R
]
  ? Subsequence<
      R extends number[] ? R : [],
      K | [...K, ...(L extends number ? [L] : [])]
    >
  : K
