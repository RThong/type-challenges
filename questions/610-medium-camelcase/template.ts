type CurMap = {
  a: "A"
  b: "B"
  c: "C"
  d: "D"
  e: "E"
  f: "F"
  g: "G"
  h: "H"
  i: "I"
  j: "J"
  k: "K"
  l: "L"
  m: "M"
  n: "N"
  o: "O"
  p: "P"
  q: "Q"
  r: "R"
  s: "S"
  t: "T"
  u: "U"
  v: "V"
  w: "W"
  x: "X"
  y: "Y"
  z: "Z"
}

// 逻辑： -小写字母 转大写
type MyCamelCase<S extends string> =
  S extends `${infer A}-${infer Target}${infer B}`
    ? Target extends keyof CurMap
      ? `${A}${CurMap[Target]}${MyCamelCase<B>}`
      : `${A}-${MyCamelCase<`${Target}${B}`>}`
    : S
