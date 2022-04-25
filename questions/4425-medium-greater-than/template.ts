type GreaterThanNumMap = {
  "0": "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  "1": "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  "2": "3" | "4" | "5" | "6" | "7" | "8" | "9"
  "3": "4" | "5" | "6" | "7" | "8" | "9"
  "4": "5" | "6" | "7" | "8" | "9"
  "5": "6" | "7" | "8" | "9"
  "6": "7" | "8" | "9"
  "7": "8" | "9"
  "8": "9"
}

enum NumLengthType {
  "dayu",
  "xiaoyu",
  "xiangdeng",
}

type StrToArr<
  T extends string,
  U extends string[] = []
> = T extends `${infer L}${infer Res}` ? StrToArr<Res, [...U, L]> : U

type NumToStrArr<T extends number> = StrToArr<`${T}`>

type NumLengthGreaterThan<
  T extends number,
  U extends number,
  K extends number = NumToStrArr<T>["length"],
  R extends number = NumToStrArr<U>["length"]
> = K extends R
  ? NumLengthType.xiangdeng
  : `${R}` extends keyof GreaterThanNumMap
  ? `${K}` extends GreaterThanNumMap[`${R}`]
    ? NumLengthType.dayu
    : NumLengthType.xiaoyu
  : NumLengthType.xiaoyu

type EqualLengthNumGreaterThan<
  T extends number,
  U extends number,
  K extends string[] = NumToStrArr<T>,
  R extends string[] = NumToStrArr<U>
> = K[0] extends R[0]
  ? K["length"] extends 1
    ? false
    : EqualLengthNumGreaterThan<
        T,
        U,
        Shift<K> extends string[] ? Shift<K> : [],
        Shift<R> extends string[] ? Shift<R> : []
      >
  : R[0] extends keyof GreaterThanNumMap
  ? K[0] extends GreaterThanNumMap[R[0]]
    ? true
    : false
  : false

type GreaterThan<T extends number, U extends number> = NumLengthGreaterThan<
  T,
  U
> extends NumLengthType.dayu
  ? true
  : NumLengthGreaterThan<T, U> extends NumLengthType.xiaoyu
  ? false
  : EqualLengthNumGreaterThan<T, U>

// 数组记录长度， 看是先匹配到T还是先匹配到U
// type GreaterThan<
//   T extends number,
//   U extends number,
//   Arr extends unknown[] = []
// > = Arr["length"] extends T
//   ? false
//   : Arr["length"] extends U
//   ? true
//   : GreaterThan<T, U, [...Arr, any]>
