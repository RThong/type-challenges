// type SplitWithChar<T extends string, CurrentStr extends string = '', Arr extends string[] = []> =
// T extends `${infer L}${infer R}` ? L extends '_' ? SplitWithChar<R, '', [...Arr, CurrentStr]> : SplitWithChar<R, `${CurrentStr}${L}`, Arr> : [...Arr, CurrentStr]

// type UppercaseFirst<T extends string> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${Lowercase<R>}` : never

// type FormatArr<T extends string[], U extends string[] = []> = T extends [infer L, ...infer R] ? U['length'] extends 0 ?
//   FormatArr<R, [Lowercase<L>]> : FormatArr<R, [...U, UppercaseFirst<L>]> : U

// type CamelCase<T extends string> = T extends `${infer _}_${infer __}` ? Join<FormatArr<SplitWithChar<T>>, ''> : Lowercase<T>

type CamelCase<S extends string> = S extends `${infer F}_${infer M}${infer E}` ?
`${Lowercase<F>}${Uppercase<M>}${CamelCase<E>}` : Lowercase<S>
