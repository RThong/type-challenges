// type LastIndexOf<
//   T extends unknown[],
//   U,
//   K extends T[number][] = [],
//   R extends number = -1
// > = T extends [infer L, ...infer Res]
//   ? LastIndexOf<Res, U, [...K, L], L extends U ? K["length"] : R>
//   : R

type LastIndexOf<T extends unknown[], U> = T extends [...infer Rest, infer R]
  ? R extends U
    ? Rest["length"]
    : LastIndexOf<Rest, U>
  : -1
