type TupleToObject<T extends readonly string[] | number[]> = {
  [key in T[number]]: key
}
