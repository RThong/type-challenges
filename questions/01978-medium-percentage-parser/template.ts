type NumStr = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

type QWE<
  A extends string,
  U extends string = ""
> = A extends `${infer L}${infer R}`
  ? L extends NumStr
    ? QWE<R, `${U}${L}`>
    : [U, L]
  : [U, ""]

type PercentageParser<A extends string> = A extends `${infer L}${infer R}`
  ? L extends "+" | "-"
    ? [L, ...QWE<R>]
    : ["", ...QWE<A>]
  : ["", "", ""]
