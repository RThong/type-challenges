type StringToUnion<
  T extends string,
  U extends unknown = never
> = T extends `${infer A}${infer Rest}` ? StringToUnion<Rest, U | A> : U
