type IsRequiredKey<T extends Record<string, any>, U> = (
  U extends keyof GetOptional<T> ? false : true
) extends true
  ? true
  : false
