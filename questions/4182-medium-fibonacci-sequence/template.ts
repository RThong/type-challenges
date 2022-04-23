type ArrByNum<T extends number, U extends any[] = []> = U["length"] extends T
  ? U
  : ArrByNum<T, [...U, any]>

type Plus<T extends number, U extends number> = [
  ...ArrByNum<T>,
  ...ArrByNum<U>
]["length"]

type LastTwoSum<T extends number[]> = T extends [...infer _, infer A, infer B]
  ? A extends number
    ? B extends number
      ? Plus<A, B>
      : never
    : never
  : never

type Fibonacci<
  T extends number,
  U extends number[] = [1, 1]
> = T extends U["length"]
  ? Last<U>
  : Fibonacci<
      T,
      [...U, ...(LastTwoSum<U> extends number ? [LastTwoSum<U>] : [])]
    >
