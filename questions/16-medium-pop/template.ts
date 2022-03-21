type Pop<T extends unknown[]> = T extends [...infer Rest, infer _]
  ? Rest
  : never
