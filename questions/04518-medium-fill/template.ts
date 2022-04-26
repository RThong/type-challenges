type BigerOrEqual<T extends unknown[], Start extends number> = GreaterThan<
  T["length"],
  Start
> extends true
  ? true
  : T["length"] extends Start
  ? true
  : false

type IsInRange<
  T extends unknown[],
  Start extends number,
  End extends number
> = BigerOrEqual<T, Start> extends true
  ? GreaterThan<End, T["length"]> extends true
    ? true
    : false
  : false

// 难点在于范围的计算，[Start, End) ,需要单独去判断
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  U extends unknown[] = []
> = U["length"] extends T["length"]
  ? U
  : IsInRange<U, Start, End> extends true
  ? Fill<T, N, Start, End, [...U, N]>
  : Fill<T, N, Start, End, [...U, T[U["length"]]]>
