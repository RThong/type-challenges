type Chainable<Res = {}> = {
  option<T extends string, U>(
    key: MyExclude<T, keyof Res>,
    value: U
  ): Chainable<Res & { [P in T]: U }>
  get(): Res
}

// 使用interface this
// type Not<T, K> = T extends K ? never : T;
// interface Chainable {
//   option<T extends string, U>(key: Not<T, keyof this>, value: U): this & { [K in T]: U };
//   get(): Omit<this, 'option' | 'get'>
// }
