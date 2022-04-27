type Without<
  T extends unknown[],
  U extends unknown[] | unknown,
  K extends T[number][] = []
> = T extends [infer First, ...infer Res]
  ? Without<
      Res,
      U,
      [
        ...K,
        // 数组转联合类型去判断
        ...(First extends (U extends unknown[] ? U : [U])[number]
          ? []
          : [First])
      ]
    >
  : K
