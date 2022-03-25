type KebabMap = {
  A: "a"
  B: "b"
  C: "c"
  D: "d"
  E: "e"
  F: "f"
  G: "g"
  H: "h"
  I: "i"
  J: "j"
  K: "k"
  L: "l"
  M: "m"
  N: "n"
  O: "o"
  P: "p"
  Q: "q"
  R: "r"
  S: "s"
  T: "t"
  U: "u"
  V: "v"
  W: "w"
  X: "x"
  Y: "y"
  Z: "z"
}

type KebabCase<
  S extends string,
  U extends string = ""
> = S extends `${infer Target}${infer R}`
  ? Target extends keyof KebabMap
    ? U extends ""
      ? KebabCase<R, `${U}${KebabMap[Target]}`>
      : KebabCase<R, `${U}-${KebabMap[Target]}`>
    : KebabCase<R, `${U}${Target}`>
  : U
