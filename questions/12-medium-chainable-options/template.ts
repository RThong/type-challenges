type Chainable<Res = {}> = {
  option<T extends string, U>(
    key: MyExclude<T, keyof Res>,
    value: U
  ): Chainable<Res & { [P in T]: U }>
  get(): Res
}
