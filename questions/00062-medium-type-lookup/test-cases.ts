import { Equal, Expect } from "@type-challenges/utils"

interface Cat {
  type: "cat"
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal"
}

interface Dog {
  type: "dog"
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer"
  color: "brown" | "white" | "black"
}

interface Bird {
  type: "bird"
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer"
  color: "brown" | "white" | "black"
}

type Animal = Cat | Dog | Bird
type cases = [
  Expect<Equal<MyLookUp<Animal, "dog">, Dog>>,
  Expect<Equal<MyLookUp<Animal, "cat">, Cat>>
]
