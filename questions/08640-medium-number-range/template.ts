type ArrLength<T extends unknown[]> = T["length"] extends number
  ? T["length"]
  : never

type NumberRange<
  L extends number,
  H extends number,
  A extends unknown[] = [],
  B extends number[] = []
> = A["length"] extends L
  ? L extends H
    ? [...B, A["length"]][number]
    : NumberRange<
        ArrLength<[...A, unknown]>,
        H,
        [...A, unknown],
        [...B, A["length"]]
      >
  : NumberRange<L, H, [...A, unknown], B>
// type Utils<L, C extends any[] = [], R = L> =
//   C['length'] extends L
//       ? R
//       : Utils<L, [...C, 0], C['length'] | R>

// type NumberRange<L, H> = L | Exclude<Utils<H>, Utils<L>>
