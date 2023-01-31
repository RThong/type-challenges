import { Equal } from "@type-challenges/utils"

export type IndexOf<
  T extends unknown[],
  U,
  K extends T[number][] = []
> = T extends [infer L, ...infer Res]
  ? Equal<L, U> extends true
    ? K["length"]
    : IndexOf<Res, U, [...K, L]>
  : -1
