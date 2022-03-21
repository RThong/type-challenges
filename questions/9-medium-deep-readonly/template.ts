type DeepReadonly<T extends { [key: string]: unknown }> = {
  readonly [P in keyof T]: T[P] extends { [key: string]: unknown }
    ? DeepReadonly<T[P]>
    : T[P]
}
