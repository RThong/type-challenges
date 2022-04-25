type MinusOneMap = {
  "0": "9"
  "1": "0"
  "2": "1"
  "3": "2"
  "4": "3"
  "5": "4"
  "6": "5"
  "7": "6"
  "8": "7"
  "9": "8"
}

// '1234' => ['123','4']
type MinusOneSplitEndStr<
  T extends string,
  U extends string = ""
> = T extends `${infer R}${infer Rest}`
  ? Rest extends keyof MinusOneMap
    ? [`${U}${R}`, Rest]
    : MinusOneSplitEndStr<Rest, `${U}${R}`>
  : [U, ""]

// '0001' => '1'
type MinusOneFilterZero<T extends string> = T extends `0${infer R}`
  ? T extends "0"
    ? T
    : MinusOneFilterZero<R>
  : T

// MinusOne的字符结果
type MinusOneTemp<
  T extends string,
  U extends string = ""
> = MinusOneSplitEndStr<T>[0] extends ""
  ? U
  : MinusOneSplitEndStr<T>[1] extends ""
  ? `${MinusOneSplitEndStr<T>[0] extends keyof MinusOneMap
      ? MinusOneMap[MinusOneSplitEndStr<T>[0]]
      : ""}${U}`
  : MinusOneSplitEndStr<T>[1] extends "0"
  ? MinusOneTemp<
      MinusOneSplitEndStr<T>[0],
      `${MinusOneMap[MinusOneSplitEndStr<T>[1]]}${U}`
    >
  : `${MinusOneSplitEndStr<T>[0]}${MinusOneSplitEndStr<T>[1] extends keyof MinusOneMap
      ? MinusOneMap[MinusOneSplitEndStr<T>[1]]
      : ""}${U}`

// 缺少字符类型转数字类型的工具泛型
// type MinusOne<T extends string> = StrToNum<MinusOneFilterZero<MinusOneTemp<T>>>
