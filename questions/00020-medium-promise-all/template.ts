declare function PromiseAll<T extends unknown[]>(
  values: MyReadonly<[...T]>
): Promise<{
  [key in keyof T]: T[key] extends Promise<unknown> ? MyAwaited<T[key]> : T[key]
}>

// const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
