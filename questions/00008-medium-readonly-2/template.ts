type MyReadonly2<
  T extends { [key: string]: any },
  K extends keyof T = keyof T
> = {
  readonly [key in K]: T[key]
} & Omit<T, K>
