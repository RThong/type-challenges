type Trim<S extends string> = S extends
  | `${" " | "\n" | "\t"}${infer A}${" " | "\n" | "\t"}`
  | `${infer A}${" " | "\n" | "\t"}`
  | `${" " | "\n" | "\t"}${infer A}`
  ? Trim<A>
  : S

// type Trim<S extends string> = TrimLeft<TrimRight<S>>
