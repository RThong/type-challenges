type Join<
  T extends unknown[],
  U extends string | number,
  K extends string = ""
> = T extends [infer L, ...infer Res]
  ? Join<Res, U, K extends "" ? L : `${K}${U}${L & string}`>
  : K
