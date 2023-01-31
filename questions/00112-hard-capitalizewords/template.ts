type Alphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"

type ValidChar = Alphabet | Uppercase<Alphabet>

type CapitalizeWordsStep1<
  T extends string,
  U extends string[] = [],
  K extends string = ""
> = T extends `${infer R}${infer Res}`
  ? R extends ValidChar
    ? CapitalizeWordsStep1<Res, U, `${K}${R}`>
    : CapitalizeWordsStep1<Res, [...U, `${K}${R}`], "">
  : [...U, K]

type CapitalizeWords<
  S extends string,
  U extends string[] = CapitalizeWordsStep1<S>,
  Ind extends unknown[] = [],
  K extends string = ""
> = Ind["length"] extends U["length"]
  ? K
  : CapitalizeWords<S, U, [...Ind, 1], `${K}${MyCapitalize<U[Ind["length"]]>}`>
