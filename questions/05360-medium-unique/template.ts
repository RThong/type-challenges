import { IndexOf } from "../05153-medium-indexof/template"

export type Unique<
  T extends unknown[],
  U extends T[number][] = []
> = T extends [infer L, ...infer Res]
  ? Unique<Res, IndexOf<U, L> extends -1 ? [...U, L] : U>
  : U
