type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer A}`
  ? TrimLeft<A>
  : S
