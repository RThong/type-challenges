type Zip<
  T extends unknown[],
  U extends unknown[],
  K extends unknown[] = []
> = T extends [infer L1, ...infer R1]
  ? U extends [infer L2, ...infer R2]
    ? Zip<R1, R2, [...K, [L1, L2]]>
    : K
  : K
