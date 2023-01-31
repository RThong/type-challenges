type CheckRepeatedChars<T extends string> = T extends `${infer L}${infer Rest}`
  ? L extends StringToUnion<Rest>
    ? true
    : IsRepeat<Rest>
  : false

type A = CheckRepeatedChars<"abb">
