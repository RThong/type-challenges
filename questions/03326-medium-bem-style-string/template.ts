// 使用临时储存的联合类型去 extends 会有 '乘法分配律'的作用

// type BEMStep2<
//   B extends string,
//   M extends string[],
//   T = M[number]
// > = M extends [] ? B : T extends M[number] ? `${B}--${T}` : never

// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[],
//   T = E[number]
// > = E extends []
//   ? BEMStep2<B, M>
//   : T extends E[number]
//   ? BEMStep2<`${B}__${T}`, M>
//   : never

// 模板字符串类型中的单个联合类型会是每个子类型构成的字符串
// 模板字符串类型中的多个联合类型会有 '乘法分配律' 的效果
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E["length"] extends 0 ? "" : `__${E[number]}`}${M["length"] extends 0
  ? ""
  : `--${M[number]}`}`
