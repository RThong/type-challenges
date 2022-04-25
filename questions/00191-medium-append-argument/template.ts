type AppendArgument<
  Fn extends (...args: any[]) => unknown,
  A extends unknown
> = Fn extends (...args: infer R) => infer K ? (...args: [...R, A]) => K : never
