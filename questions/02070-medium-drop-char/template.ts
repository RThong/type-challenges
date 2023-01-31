type DropChar<
  S extends string,
  C extends string,
  U extends string = ""
> = S extends `${infer L}${infer Rest}`
  ? L extends ""
    ? U
    : L extends C
    ? DropChar<Rest, C, U>
    : DropChar<Rest, C, `${U}${L}`>
  : U

// type ADropChar<S, C extends string> = S extends `${infer L}${C}${infer R}` ? `${L}${R}`:S
