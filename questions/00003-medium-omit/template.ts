type MyOmit<T extends { [key: string]: any }, K extends keyof T> = {
  [key in MyExclude<keyof T, K>]: T[key]
}
