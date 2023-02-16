type CountCharNum<T extends string, U extends Record<string, any[]> = {}>
= T extends `${infer L}${infer R}`? CountCharNum<R, Omit<U, L> & Record<L, [...(U[L] extends never ? []: U[L] extends any[]? U[L] : []), 1]>> : U

type GetUniqueChar<T extends Record<string, any[]>>
= keyof {
  [key in keyof T as T[key] extends [1] ? key : never]: T[key]
}

type GetFirstUniqueCharIndex<T extends string, U, K extends string[] = []> = T extends `${infer L}${infer R}` ? L extends U ? K['length']: GetFirstUniqueCharIndex<R, U, [...K, L]> : -1

type FirstUniqueCharIndex<T extends string> = GetFirstUniqueCharIndex<T, GetUniqueChar<CountCharNum<T>>>

// 模板字符串可以灵活表示【重复字符】

// type FirstUniqueCharIndex<T extends string, U extends string[] = []>
// = T extends `${infer L}${infer R}` ? R extends `${infer _}${L}${infer __}` ? FirstUniqueCharIndex<R, [...U, L]> : L extends U[number] ? FirstUniqueCharIndex<R, [...U, L]>: U['length'] : -1
