type Filter<T extends any[], P, U extends any[] = []> = T extends [infer L, ...infer R]?

  L extends P ? Filter<R, P, [...U, L]> : Filter<R, P, U> : U
