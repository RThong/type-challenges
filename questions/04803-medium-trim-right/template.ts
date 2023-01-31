// type TrimRight<S extends string> = S extends `${infer A}${infer B}`
//   ? B extends " " | "\n" | "\t"
//     ? TrimRight<A>
//     : `${A}${B}`
//   : never

type TrimRight<S extends string> = S extends `${infer A}${" " | "\n" | "\t"}`
  ? TrimRight<A>
  : S
