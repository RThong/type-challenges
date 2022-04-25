// 核心： A extends B ? Combination<A, UnionCombination<Exclude<B, A>>>
// 利用联合类型的分配  加上Exclude 将每项和剩余的联合类型去进行组合 |会自动去掉相同类型

// 先取全部组合  再将组合中含重复字符的进行替换
type AllCombinations<
  T extends string,
  U extends string = "",
  R extends string = T
> = R extends `${infer _}${infer Res}`
  ? AllCombinations<T, U | ResetStr<`${U}${StringToUnion<T>}`>, Res>
  : U

type IsRepeat<T extends string> = T extends `${infer L}${infer Rest}`
  ? L extends StringToUnion<Rest>
    ? true
    : IsRepeat<Rest>
  : false

// 将存在重复字符的字符串转为''
type ResetStr<T extends string> = T extends T
  ? IsRepeat<T> extends true
    ? ""
    : T
  : never

// // 1.将字符串转化为联合类型
// type StringToUnion<S extends string> = S extends `${infer L}${infer R}` ? L | StringToUnion<R> : S;
// // 2.联合类型两两合并
// type Combination<A extends string, B extends string> =
//     | A
//     | B
//     | `${A}${B}`
//     | `${B}${A}`;
// // 3 eg
// type test = Combination<'A'|'B', 'C'|'D'>
// //4.联合类型的合并，利用联合类型默认可拆解
// type UnionCombination<A extends string, B extends string = A> = A extends B ? Combination<A, UnionCombination<Exclude<B, A>>> : never;
// //5. 字符串合并
// type AllCombinations<S extends string> = UnionCombination<StringToUnion<S>>
