type Chunk<
  T extends unknown[],
  U extends number,
  // 最终结果  T[number]范围精确到T的值
  K extends T[number][][] = [],
  // 每组chunk临时保存的数组
  R extends T[number][] = []
> = T extends [infer First, ...infer Res]
  ? [...R, First]["length"] extends U
    ? Chunk<Res, U, [...K, [...R, First]], []>
    : Chunk<Res, U, K, [...R, First]>
  : [...K, ...(R extends [] ? [] : [R])]
