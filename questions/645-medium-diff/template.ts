type Diff<
  O extends { [key: string]: unknown },
  O1 extends { [key: string]: unknown }
> = {
  [key in
    | MyExclude<keyof O, keyof O1>
    | MyExclude<keyof O1, keyof O>]: key extends keyof O1
    ? O1[key]
    : key extends keyof O
    ? O[key]
    : never
}

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type AA = Diff<Foo, Bar>
