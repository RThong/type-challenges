type Copy<T> = Pick<T, keyof T>

// keyof any 能得到所有的对象类型key组成的联合类型
type RequiredByKeys<
  T extends Record<string, any>,
  K extends keyof any = keyof T
> = Copy<Omit<T, K> & Required<Pick<T, Extract<keyof T, K>>>>
